---
layout: page
title: "Q197891: Enumerating the Names of IIS Web Sites Using WSH"
permalink: kb/197/Q197891/
---

## Q197891: Enumerating the Names of IIS Web Sites Using WSH

	Article: Q197891
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use the Windows NT Option Pack (NTOP) and Internet Information Server
	(IIS) version 4.0, Web sites are added to the server using the Microsoft
	Management Console (MMC). Each new Web site is given a number in the metabase,
	and this number is used by IIS when logging and FrontPage when installing
	extensions. It is sometimes desirable to know which number corresponds to a
	given Web site.
	
	MORE INFORMATION
	================
	
	The following code was written using Windows Script Host (WSH) and lists all Web
	sites by their short metabase path and name.
	
	To use this script, follow these steps:
	
	1. Copy the following code into Notepad, and then save it to your computer as a
	  file called W3sites.vbs:
	
	        Dim objW3SVC, objSITE, strOUT
	        Set objW3SVC = GetObject("IIS://LOCALHOST/W3SVC")
	
	        If (Err <> 0) Then
	        strOUT = "Error " & Hex(Err.Number) & "("
	        strOUT = strOUT & Err.Description & ") occurred."
	        Else
	        For Each objSITE In objW3SVC
	        If objSITE.class = "IIsWebServer" Then
	        strOUT = strOUT & "LM/W3SVC/" & objSITE.Name & Chr(9)
	        strOUT = strOUT & Chr(34) & objSITE.ServerComment
	        strOUT = strOUT & Chr(34) & Chr(13) & Chr(10)
	        End If
	        Next
	        End If
	
	        WScript.Echo strOUT
	
	2. To run the code, open a command prompt, and then type the following command:
	
	     CSCRIPT.EXE W3SITES.VBS
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
