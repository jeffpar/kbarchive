---
layout: page
title: "Q131670: PC Adm: Err Msg: ADMIN Is Already Running on this Post Office"
permalink: /kb/131/Q131670/
---

## Q131670: PC Adm: Err Msg: ADMIN Is Already Running on this Post Office

	Article: Q131670
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0a,3.2,3.2a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0a, 3.2, 3.2a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run versions 3.0a, 3.2, and 3.2a of Microsoft Mail for PC Networks
	Administrators program (ADMIN.EXE), you may receive the following MS-DOS
	message:
	
	  ADMIN is already running on this Post Office.
	  Mailbox name: Admin
	  Full name: Administrator
	  FLAG.GLB is locked open
	
	CAUSE
	=====
	
	ADMIN.EXE requires write privileges to the FLAG.GLB file in \MAILDATA\GLB
	sub-directory on the postoffice.
	
	RESOLUTION
	==========
	
	There are several steps to try to resolve the problem.
	
	- Make sure that no other Mail Administrator is using the ADMIN.EXE utility.
	
	- Make sure that the FLAG.GLB file is not locked, open, or Read-Only.
	
	- If the FLAG.GLB is not available, ADMIN.EXE will create the file.
	
	MORE INFORMATION
	================
	
	The purpose of the FLAG.GLB file is to let other utilities (ADMIN.EXE,
	IMPORT.EXE, and EXTERNAL.EXE) know the mail database is in use.
	
	Depending on the network operating system, there are several ways to check to see
	who has the file locked open:
	
	- Novell NetWare versions 3.11 and 3.12: RCONSOLE and MONITOR can pinpoint who
	  has the file locked open.
	
	- Windows NT versions 3.1 and 3.5 Server or Workstation: In the Control Panels
	  Server, select the In Use Button showing a list of all the files in use for
	  that server with the user information associated with the file name.
	
	If no users have the file locked open, in File Manager from the File menu, choose
	Properties to see if the Read-Only attribute is set.
	
	On Novell NetWare version 3.xx, the procedures for checking to see if a file is
	locked open using RCONSOLE and MONITOR:
	
	1. Login to the Novell network under Supervisor.
	
	2. Run RCONSOLE.EXE in the SYSTEM sub-directory usually located in the SYS
	  volume of the server.
	
	3. Select the server that the files are located in the Available Servers box,
	  and enter the password.
	
	4. To change to the Monitor program, press the + key on the keypad to switch
	  between screens in RCONSOLE. If the + key does not work, type the following
	  at the ":" prompt:
	
	  "LOAD MONITOR" (without the quotation marks)
	
	  You should now be in the Monitor program box indicating Information for Server
	  with the server name and another box stating Available Options.
	
	5. From the Available Options box, select File Open/Lock Activity by using the
	  down arrow keys. Press ENTER.
	
	6. Select the volume that the files reside in and you keep going through the
	  boxes until the appropriate directory is found holding that file.
	
	7. Highlight the file, and a box stating the file name will appear.
	
	8. Under the Conn Task Lock Status side of the box, there will be a connection
	  number.
	
	9. Use the number from step 8, and go back to the Available Options box by using
	  the ESC key (which is the main menu of Monitor), and select Connection
	  Information, and go to the numbered connection.
	
	  There you will find the connection number and the user information.
	
	10. Highlight the connection, and press ENTER.
	
	  There will be all the files the user is accessing.
	
	
	Additional query words: 3.00a 3.20 3.20a
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN320a kbMailPCN300a
	Version           : WINDOWS:3.0a,3.2,3.2a
	
	=============================================================================
	
