---
layout: page
title: "Q161821: PRB: Remote OLE Automation: Using Access Control Lists (ACL)"
permalink: kb/161/Q161821/
---

## Q161821: PRB: Remote OLE Automation: Using Access Control Lists (ACL)

	Article: Q161821
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbole kbsetup kbVBp kbVBp400 kbVBp500 kbOSWin95 kbOSWin98 kbGrpDSVB kbGrpDSVBDB kbDSupp
	Last Modified: 26-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using a Client/Server Remote OLE Application, you receive the following
	error when attempting to create the server:
	
	  "Run Time error '-2147023132 (800706e4)': OLE Automation Error"
	
	CAUSE
	=====
	
	The server has been configured to "Allow Remote Creates by ACL," and the client
	has been set up to use an "Authentication" of "None."
	
	RESOLUTION
	==========
	
	You can either change the server to "Allow All Creates" or change the client to
	a compatible authentication level. Changes to the server are made in the Remote
	Automation Connection Manager. Changes to the Client are made in step 4 of the
	Application Setup Wizard. A compatibility chart is included in the MORE
	INFORMATION section of this article.
	
	
	MORE INFORMATION
	================
	
	Many of the examples given by Microsoft on creating Remote OLE servers suggest
	using an "Authentication" level of "None" in step 4 of the Setup Wizard for the
	client application.
	
	Step 4 of the Setup Wizard calls for you to "Add OLE Servers." At this point, you
	need to change the drop-down box to "List Files of Type:" "Remote OLE Servers
	(*.vbr)," and select the VBR file that was created when the Server executable
	was compiled. The VBR file should have the same name and be in the same
	directory as the server executable.
	
	Immediately after selecting the VBR file, you will see the "Remote OLE Servers
	Details" dialog box. The last option in the dialog box is "Authentication." This
	setting is defaulted to "1 - None." In all cases, using an "Authentication" of
	"None" will cause an error when the client attempts to create an object on the
	server which has been configured for "Allow Remote Creates by ACL".
	
	The available "Authentication" options are:
	
	  0 - Default            Use network default.
	
	  1 - None               No authentication.
	
	  2 - Connect            Connection to the server is authenticated.
	
	  3 - Call               Authenticates only at the beginning of each
	                         remote procedure call when the server receives
	                         the request. Does not apply to connection-based
	                         protocol sequences (those starting with the
	                         prefix "ncacn").
	
	  4 - Packet             Verifies that all data received is from the
	                         expected client.
	
	  5 - Packet Integrity   Verifies that none of the data transferred
	                         between client and server has been modified.
	
	  6 - Packet Privacy     Verifies all previous levels, and encrypts the
	                         argument values of each remote procedure call.
	
	Refer to "Building Client/Server Applications with Visual Basic," Part 2: Client
	Server Design, Chapter 7: Implementing OLE Servers, Page 131 - 132, for more
	information on data authentication.
	
	To assist you in determining which settings to use in the Setup Wizard, the
	following charts show which combinations of operating systems, protocols,
	security policies, and authentication levels will work. The values at the
	beginning of each row are RPC protocols. The values at the top of each column
	are authentication levels. These charts apply to "Allow Remote Creates by ACL"
	only.
	
	
	NOTE: The table below does not cover the case where Microsoft Windows 95 is being
	used as the server because Microsoft Windows 95 does not support Access Control
	Lists (ACL) authentication. Using Windows 95 for Remote OLE Automation in this
	manner will always produce the error described above. Windows 98 and Windows Me
	do support Access Control Lists (ACL) authentication.
	
	Client = Win 32 (Win NT 3.51 or Win95)
	Server = Win NT 3.51
	
	                   0       1       2       3       4       5       6
	                   ---------------------------------------------------
	
	  ncacn_np         OK      error   OK      OK      OK      OK      OK
	
	  ncacn_ip_tcp     OK      error   OK      OK      OK      OK      OK
	
	  ncadg_ip_udp     error   error   error   error   error   error   error
	
	  ncacn_nb_nb      OK      error   OK      OK      OK      OK      OK
	
	  ncacn_nb_tcp     OK      error   OK      OK      OK      OK      OK
	
	  ncacn_nb_ipx     OK      error   OK      OK      OK      OK      OK
	
	  ncacn_spx        OK      error   OK      OK      OK      OK      OK
	
	  ncadg_ipx        error   error   error   error   error   error   error
	
	------------------------------------------------------------------------
	
	Client = Win 16 (WFW 3.11, Win 3.1)
	Server = Win NT 3.51
	
	                   0       1       2       3       4       5       6
	                   -----------------------------------------------------
	
	  ncacn_np         Log On  error   Log On  Log On  Log On  Log On  Log On
	
	  ncacn_ip_tcp     Log On  error   Log On  Log On  Log On  Log On  Log On
	
	  ncadg_ip_udp     error   error   error   error   error   error   error
	
	  ncacn_nb_nb      Log On  error   Log On  Log On  Log On  Log On  Log On
	
	  ncacn_nb_tcp     Log On  error   Log On  Log On  Log On  Log On  Log On
	
	  ncacn_nb_ipx     Log On  error   Log On  Log On  Log On  Log On  Log On
	
	  ncacn_spx        Log On  error   Log On  Log On  Log On  Log On  Log On
	
	  ncadg_ipx        error   error   error   error   error   error   error
	
	Additional query words:
	
	======================================================================
	Keywords          : kbole kbsetup kbVBp kbVBp400 kbVBp500 kbOSWin95 kbOSWin98 kbGrpDSVB kbGrpDSVBDB kbDSupport kbOSWinME 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500 kbVB400Search kbVB400
	Version           : :4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	
