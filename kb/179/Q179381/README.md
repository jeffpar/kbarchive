---
layout: page
title: "Q179381: PRB: Error Connecting to MS Query with UserConnection Designer"
permalink: /kb/179/Q179381/
---

## Q179381: PRB: Error Connecting to MS Query with UserConnection Designer

	Article: Q179381
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbnokeyword kbVBp500 kbVBp600 kbGrpDSVBDB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the UserConnection Designer, you receive the following message when
	attempting to build a query:
	
	  There was a problem attempting to communicate with MS Query.
	
	CAUSE
	=====
	
	The UserConnection Designer cannot find where MS Query is located on the system.
	
	RESOLUTION
	==========
	
	Make sure the proper registry key is pointing to where MS Query is located on
	the system. To do so, you must use RegEdit.
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	The correct registry key is found at the following location:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Shared Tools\VBQuery
	
	The Path value should be set correctly to where MS Query is located. The MS Query
	executable is named Msqry32.exe.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce
	------------------
	
	1. Launch Regedit.exe (click Run on the Start menu, choose REGEDIT, and click
	  OK).
	
	2. Go to the HKEY_LOCAL_MACHINE\Software\Microsoft\Shared Tools\VBQuery key.
	
	3. This key has two data values. Edit the "Path" value to make it invalid (for
	  example, change the name of Msqry32.exe to Msqry3.exe).
	
	4. Start Visual Basic and select a standard EXE.
	
	5. Click Add ActiveX Designer on the Project menu, and select "Microsoft
	  UserConnection."
	
	6. When the UserConnection property page appears, select "User DNS-Less
	  Connection String."
	
	7. Under "ODBC Driver," select "Microsoft Access Driver (*.mdb)" and click OK.
	
	8. Under the UserConnections form, right-click UserConnection1 and select
	  "Insert Query."
	
	9. When the ODBC Microsoft Access 97 Setup dialog box appears, click OK.
	
	10. When the Select Database dialog box appears, choose the "NWIND.MDB"
	  database, and click OK.
	
	11. When the Query1 dialog box appears, click the "Based On User-Defined SQL"
	  option.
	
	12. Type in the SQL statement "Select * from customers" (without the quotation
	  marks) in the text box, then click the "Build" button.
	
	  Visual Basic will hang for a few seconds, one of the following will happen:
	
	   - You will receive the following message:
	
	  There was a problem attempting to communicate with MS Query.
	
	   - Your SQL statement will be erased.
	
	13. Edit the HKEY_LOCAL_MACHINE\Software\Microsoft\Shared Tools\VBQuery key back
	  to its original value.
	
	14. Repeat steps 4-12, and MS Query will launch properly.
	
	Additional query words: user connection msquery
	
	======================================================================
	Keywords          : kbnokeyword kbVBp500 kbVBp600 kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Issue type        : kbprb
	
	=============================================================================
	
