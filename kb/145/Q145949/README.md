---
layout: page
title: "Q145949: Share Names Greater Than 12 Characters Cause Errors on Clients"
permalink: /kb/145/Q145949/
---

## Q145949: Share Names Greater Than 12 Characters Cause Errors on Clients

{% raw %}

	Article: Q145949
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 2.2c,2000,3.0,3.11,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 18-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows 95 
	- Microsoft Windows for Workgroups version 3.11 
	- Microsoft Network Client for MS-DOS version 3.0 
	- Microsoft LAN Manager, version 2.2c 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you browse a Window NT computer using the NET VIEW command from a Windows
	95 or a Windows for Workgroups computer, the following error message appears:
	
	  Error 234: Additional data is available.
	
	On a LAN Manager 2.2c (MS-DOS) client computer, the following error message
	appears:
	
	  NET3513: More data is available than can be returned by LAN Manager.
	
	When you browse a Windows NT computer using File Manager in Windows for
	Workgroups, the following error message appears:
	
	  An internal LAN Manager error occurred.
	
	CAUSE
	=====
	
	These errors can occur if a share name of the Windows NT computer is greater
	than 12 characters and/or contains a space.
	
	RESOLUTION
	==========
	
	Make sure that all the share names on the Windows NT computer are 12 characters
	or less and do not contain any spaces.
	
	MORE INFORMATION
	================
	
	To ensure that the problems above do not occur, Windows NT File Manager, Server
	Manager and the NET SHARE command do not allow share names greater than 12
	characters. In addition, if the share name exceeds the 8.3 directory naming
	size, the following message appears when you attempt to share the directory in
	Windows NT:
	
	  This sharename <share name> is not accessible from some MS-DOS
	  workstations. Are you sure you want to use this sharename?
	
	While the error does not mention Windows for Workgroups this could affect those
	clients as well.
	
	In Windows NT 4.xx, under the "Add Printer" wizard you will no longer received
	any warnings about name length. Also under Windows 4.0 Explorer you will not
	receive any warnings. Remember when browsing the browser returns ALL share names
	so even ONE name will prevent the ENTIRE list from being returned. So, for
	example, a too long data share name will prevent all printers from being
	browsed.
	
	However, the Windows NT Resource Kit utility, RMTSHARE.EXE, allows you to create
	a share name that exceeds 12 characters. When you share a directory that exceeds
	the 8.3 directory naming size using Rmtshare, the message above does not appear.
	Therefore, there is no warning that the share name you create is not accessible
	from an MS-DOS networking client computer or Windows for Workgroups.
	
	If you use the NET USE command or Explorer in Windows 95, you are able to
	successfully connect to the network share that exceeds 12 characters on the
	Windows NT computer. If you use the NET USE command in Windows for Workgroups,
	you are able to successfully connect to the same share. However, you cannot
	connect to the same share using File Manager in Windows for Workgroups. If you
	use the NET USE command from any of the MS-DOS client computers, you cannot
	connect to the share.
	
	The following is a sample Rmtshare command line syntax, which you can use to
	create a share name that is greater than 12 characters:
	
	  rmtshare \\NT_Server\Thirteen_char=c:\MyDir
	
	Additional query words: prodnt 3.50 wfw lanman printer
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinNTS351search kbAudDeveloper kbWin95search kbZNotKeyword kbLanManSearch kbWFWSearch kbWinAdvServSearch kbZNotKeyword3 kbNetworkClientSearch kbWFW311 kbLanMan220c kbNetworkClient300DOS
	Version           : :2.2c,2000,3.0,3.11,3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
