---
layout: page
title: "Q169398: HOWTO: Manipulate File Shares with ADSI (VB Sample)"
permalink: /kb/169/Q169398/
---

## Q169398: HOWTO: Manipulate File Shares with ADSI (VB Sample)

	Article: Q169398
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,6.0
	Operating System(s): 
	Keyword(s): kbOSWinNT400 kbOSWin2000 kbVBp kbVBp400 kbVBp600 kbOSWin95 kbOSWin98 kbGrpDSVBDB kbDSup
	Last Modified: 03-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0, used with:
	   - the operating system: Microsoft Windows 2000 
	   - the operating system: Microsoft Windows NT 4.0 
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows 95 
	- Microsoft Visual Basic Professional Edition for Windows, versions 4.0, 6.0, used with:
	   - the operating system: Microsoft Windows 2000 
	   - the operating system: Microsoft Windows NT 4.0 
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows 95 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 4.0, 6.0, used with:
	   - the operating system: Microsoft Windows 2000 
	   - the operating system: Microsoft Windows NT 4.0 
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows 95 
	- Microsoft Visual Basic Standard Edition for Windows, version 4.0, used with:
	   - the operating system: Microsoft Windows 2000 
	   - the operating system: Microsoft Windows NT 4.0 
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can use Active Directory Service Interfaces (ADSI) to manipulate file shares
	as shown in the Visual Basic sample code below.
	
	MORE INFORMATION
	================
	
	You must install the ADSI runtime (ADS.EXE) available from
	www.microsoft.com/ntserver/info/adsi.htm, and then add a reference to Active DS
	Type Library.
	
	Note: Windows 2000 includes the ADSI 2.5 run time. Installation of the above
	runtime is not required.
	
	The following code first gets a fileshare object on a server and reads its path
	property. Then it gets a fileservice object on a server, uses it to enumerate
	the shares on the server, creates a new share \\SERVER\newshare for C:\, and
	deletes the share it just created. You can omit the DOMAIN\ in the code below,
	but you may see some performance degradation caused by additional browsing to
	find the SERVER:
	
	     Sub foo()
	
	     Dim comp As IADsComputer
	     Dim serv As IADsService
	     Dim fserv As IADsContainer
	     Dim share As IADsFileShare
	     Dim shareNew As IADsFileShare
	     Dim v As Variant
	
	     ' Replace DOMAIN, SERVER & SHARE with the appropriate
	     ' domain, server  and share names
	     Set share = GetObject("WinNT://DOMAIN/SERVER/lanmanserver/SHARE")
	     v = share.Path ' Gets directory path on server
	     Set share = nothing
	
	     ' Replace DOMAIN & SERVER with the appropriate domain and server names
	     Set fserv = GetObject("WinNT://DOMAIN/SERVER/lanmanserver")
	
	     ' Enumerate existing shares
	     For Each share In fserv
	       v = share.Class
	       v = share.ADsPath
	       v = share.HostComputer
	       v = share.Path
	     Next share
	
	     ' Create share in fileservice container
	     Set shareNew = fserv.Create("fileshare", "newshare")
	     shareNew.Path = "C:\"
	     shareNew.SetInfo  ' Commit new share
	
	     ' Delete share
	     fserv.Delete "fileshare", "newshare"
	
	     ' Fails since share is gone
	     shareNew.GetInfo
	
	     End Sub
	
	REFERENCES
	==========
	
	For more informatioin about the ADSI specification, see the following Microsoft
	Web site in the Platform Software Development Kit (SDK):
	
	  http://msdn.microsoft.com/library/default.asp?url=/library/en-us/netdir/adsi/directory_services.asp
	
	Additional query words:
	
	======================================================================
	Keywords          : kbOSWinNT400 kbOSWin2000 kbVBp kbVBp400 kbVBp600 kbOSWin95 kbOSWin98 kbGrpDSVBDB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2
	Version           : :4.0,6.0
	Hardware          : ALPHA MIPS x86
	Issue type        : kbhowto
	
	=============================================================================
	
