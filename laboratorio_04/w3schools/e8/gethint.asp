<%
Dim a, q, i, hint
a = Array("Anna", "Brittany", "Cinderella", "Diana", "Eva", "Fiona", "Gunda", "Hege", "Inga", "Johanna", "Kitty", "Linda", "Nina", "Ophelia", "Petunia", "Amanda", "Raquel", "Carmen", "Yolanda", "Zelda")
q = LCase(Request.QueryString("q"))
hint = ""

If q <> "" Then
    For i = 0 To UBound(a)
        If InStr(1, LCase(a(i)), q, 1) = 1 Then
            If hint = "" Then
                hint = a(i)
            Else
                hint = hint & ", " & a(i)
            End If
        End If
    Next
End If

If hint = "" Then
    Response.Write("no suggestion")
Else
    Response.Write(hint)
End If
%>
