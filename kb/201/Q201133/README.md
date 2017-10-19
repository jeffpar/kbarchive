---
layout: page
title: "Q201133: Scripting Change Occurs When Upgrading from IIS 3.0"
permalink: /kb/201/Q201133/
---

## Q201133: Scripting Change Occurs When Upgrading from IIS 3.0

	Article: Q201133
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using Scripting.FileSystemObject may return random characters due to a change in
	the IIS 3.0 implementation of the OpenTextFile method.
	
	With IIS 3.0, the following script correctly displays the contents of
	Testfile.txt:
	
	     <%
	       Set fs = server.CreateObject("Scripting.FileSystemObject")
	       Set a = fs.OpenTextFile("c:\inetpub\wwwroot\testfile.txt", 1, FALSE, TRUE )
	       do while not a.AtEndOfStream
	         response.write(a.readline&"<br>"&Chr(13))
	       loop
	       a.Close
	     %>
	
	However, with IIS 4.0, it displays random characters depending on the contents of
	Testile.txt. For example, if Testfile.txt contains the following:
	
	  this is testfile.txt
	  line 2
	  line 3
	
	The response returned to a browser is:
	
	  ???????????????????
	
	CAUSE
	=====
	
	The error is caused by the last parameter to OpenTextFile. It is the "format"
	used to open the file, ASCII, Unicode, and so on. In IIS 3.0, this parameter is
	ignored. In IIS 4.0, VBScript respects the parameter.
	
	The OpenTextFile method has these parameters:
	
	     object.OpenTextFile(filename[, iomode[, create[, format]]])
	
	where the following applies:
	
	  object   = Required. Always the name of a FileSystemObject.
	  filename = Required. String expression that identifies the file to open.
	  iomode   = Optional. Indicates input/output mode. Can be one of two constants, either 
	             ForReading or ForAppending.
	  create   = Optional. Boolean value that indicates whether a new file can be created if 
	             the specified filename doesn't exist. The value is True if a new file is 
	             created; False if it isn't created. The default is False.
	  format   = Optional. One of three Tristate values used to indicate the format of the 
	             opened file. If omitted, the file is opened as ASCII.
	
	The parameters listed above may have these settings. The iomode argument can have
	either of the following:
	
	  1 = ForReading. Open a file for reading only. You can't write to this file.
	  8 = ForAppending. Open a file and write to the end of the file.
	
	The format argument can have any of the following:
	
	  -2 = TristateUseDefault. Opens the file using the system default.
	  -1 = TristateTrue. Opens the file as Unicode.
	   0 = TristateFalse. Opens the file as ASCII.
	
	MORE INFORMATION
	================
	
	More information on this can be found in the Windows NT Option Pack online
	documentation. If you installed the product documentation, this is located at
	the following local URL:
	
	http://localhost/iisHelp/iis/misc/default.asp
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Issue type        : kbinfo
	
	=============================================================================
	
