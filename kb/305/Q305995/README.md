---
layout: page
title: "Q305995: PRB: Error When You Connect to a Jet Database on a Novell Server"
permalink: kb/305/Q305995/
---

## Q305995: PRB: Error When You Connect to a Jet Database on a Novell Server

	Article: Q305995
	Product(s): Microsoft C Compiler
	Version(s): 3.51,3.6
	Operating System(s): 
	Keyword(s): kberrmsg kbJET kbGrpDSVBDB kbDSupport
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The DAO SDK, versions 3.51, 3.6 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you try to use Data Access Objects (DAO) to connect to a Microsoft Jet
	database on a Novell fileserver, you may receive the following error message:
	
	  3050 Could not lock file.
	
	CAUSE
	=====
	
	This problem occurs because Novell fileservers have a maximum number of locks
	setting, and Jet may use a high number locks when it reads or writes an .mdb
	file.
	
	RESOLUTION
	==========
	
	There are several ways to work around this behavior:
	
	- Use Regedit.exe or Regedt32.exe to edit the Windows Registry, and permanently
	  change the MaxLocksPerFile value.
	
	- Use the SetOption method of the DBEngine object to temporarily change the
	  MaxLocksPerFile value in the code.
	
	Method 1: Change MaxLocksPerFile in the Windows Registry:
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. From the Windows Start menu, click Run, type "Regedt32.exe" (without the
	  quotation marks), and then click OK to start Registry Editor.
	
	2. Locate the MaxLocksPerFile value under the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Jet\4.0\Engines\Jet 4.0
	
	  NOTE: If the MaxLocksPerFile value does not exist, you must create it.
	
	3. Decrease the MaxLocksPerFile value.
	
	4. Quit Registry Editor.
	
	NOTE: This method changes the Windows Registry setting for all applications that
	use the Microsoft Jet database engine version 4.0.
	
	Method 2: Use SetOption to Change MaxLocksPerFile Temporarily:
	
	Microsoft provides programming examples for illustration only, without warranty
	either expressed or implied, including, but not limited to, the implied
	warranties of merchantability and/or fitness for a particular purpose. This
	article assumes that you are familiar with the programming language being
	demonstrated and the tools used to create and debug procedures. Microsoft
	support professionals can help explain the functionality of a particular
	procedure, but they will not modify these examples to provide added
	functionality or construct procedures to meet your specific needs. If you have
	limited programming experience, you may want to contact a Microsoft Certified
	Partner or the Microsoft fee-based consulting line at (800) 936-5200. For more
	information about Microsoft Certified Partners, please visit the following
	Microsoft Web site:
	
	  http://www.microsoft.com/partner/referral/
	
	For more information about the support options that are available and about how
	to contact Microsoft, visit the following Microsoft Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The SetOption method temporarily overrides values for the Microsoft Jet database
	engine keys in the Windows Registry. The new value remains in effect until you
	change it again or until the DBEngine object is closed.
	
	The following code sample sets MaxLocksPerFile to 128 before it runs an update
	operation inside a transaction:
	
	  Sub MDBUpdate()
	     On Error GoTo MDBUpdate_Error
	     Dim db As DAO.Database, ws As DAO.Workspace
	
	     ' Set MaxLocksPerFile.
	     DBEngine.SetOption dbMaxLocksPerFile, 128
	
	     Set db = CurrentDb
	     Set ws = Workspaces(0)
	
	     ' Perform the update.
	     ws.BeginTrans
	     db.Execute "UPDATE TableName SET Field1 = 'Updated Field'", _
	           dbFailOnError
	
	     ws.CommitTrans
	
	     db.Close
	     MsgBox "Done!"
	     Exit Sub
	
	  MDBUpdate_Error:
	     MsgBox Err & " " & Error
	     ws.Rollback
	     MsgBox "Operation Failed - Update Canceled"
	  End Sub
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbJET kbGrpDSVBDB kbDSupport 
	Technology        : kbAudDeveloper kbDAOsearch kbSDKDAOSearch kbSDKSearch kbSDKDAO360 kbSDKDAO351
	Version           : :3.51,3.6
	Issue type        : kbprb
	
	=============================================================================
	
