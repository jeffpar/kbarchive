---
layout: page
title: "Q65125: FILE: Developing Network Applications for Windows 3.1"
permalink: /kb/065/Q65125/
---

## Q65125: FILE: Developing Network Applications for Windows 3.1

{% raw %}

	Article: Q65125
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kbfile kbnetwork kbAPI kbSDKPlatform kbOSWin310 kbOSWin300 kbGrpDSNet
	Last Modified: 04-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article is part of a set of seven articles, collectively called the
	"Windows Developer's Notes" that are available in NETWORK.EXE. More information
	about the contents of the other articles can be found in the Microsoft Knowledge
	Base article:
	
	  Q65260 The Windows Developer's Notes
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Software
	Library:
	
	  Network.exe
	  (http://support.microsoft.com/download/support/mslfiles/Network.exe)
	
	For more information about downloading files from the Microsoft Software Library,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	
	As local area networks (LANs) become increasingly common, application developers
	should ensure that their applications run properly in a network environment.
	
	There are two areas that developers should keep in mind:
	
	- Applications should be well behaved when shared by multiple users.
	
	- Applications that access network software directly might require special
	  measures to be compatible with protected (standard or 386 enhanced) mode.
	
	This document discusses each of these areas.
	
	There are other forms of networking available to developer which provide a layer
	of transparency from the protected vs real mode issues of Windows network
	programming. These network interfaces are not discussed in this article, but may
	be found in other articles throughout the Microsoft Knowledge Base. They are:
	Remote Procedure Calls (RPC), Windows Sockets, named pipes, mailslots, and
	NetDDE.
	
	=======================================================================
	                  BEING SHARED BY MULTIPLE USERS
	=======================================================================
	
	Many corporations are choosing to have their computer users share a single
	copy of an application that resides on a network server. Microsoft Windows
	version 3.1 can be run this way. The Windows Setup /n (network) option
	configures the user's system, which ensures that most Windows files are
	used directly off the network, while the user's personal files and
	configuration information are stored in a private Windows directory. (See
	the "Microsoft Windows User's Guide" for more information on using a shared
	copy of Windows.)
	
	If the developer intends to allow shared copies of an application, then the
	developer must make sure that two users running the same application will
	not interfere with each other. The following sections present rules that
	should help the developer design the application for network support.
	
	CREATING PERMANENT FILES
	========================
	
	Many applications store configuration files in the same directory as the
	application's own executable file. This method will not work for multiple
	users because the application will store each user's information in the
	same directory, overwriting other users' information.
	
	Instead, the application should use the GetWindowsDirectory() function to
	find the user's private Windows directory. This location is guaranteed to
	be unique for each user.
	
	Refer to the "Microsoft Windows Software Development Kit Reference"
	for more information on the GetWindowsDirectory() function.
	
	CREATING TEMPORARY FILES
	========================
	
	When creating temporary files, use the GetTempFilename() function to
	determine the name and location of the file. This function will ensure that
	temporary filenames will not conflict, even if multiple users are sharing
	the same temporary storage directory.
	
	USING PROFILE STRINGS
	=====================
	
	Profile and configuration information is usually stored in initialization
	(.INI) files using Windows functions such as WriteProfileString(). These
	functions fall into two categories: those that access WIN.INI, and those
	that access another .INI file specified by the program.
	
	The following functions access WIN.INI:
	
	- GetProfileString()
	- GetProfileInt()
	- WriteProfileString()
	
	Because each user has a unique copy of WIN.INI, these functions can be used
	safely, even when the application is being shared by more than one user.
	
	The following functions access other initialization files:
	
	- GetPrivateProfileString()
	- GetPrivateProfileInt()
	- WritePrivateProfileString()
	
	These functions behave similarly to the WIN.INI functions, except that the
	application specifies the name of the private initialization file. When
	using these functions, the developer should specify the name of the file;
	however, a complete pathname should not be used (for example, MYAPP.INI
	should be used instead of C:\MYAPP\MYAPP.INI.) By default, the file will be
	located in the user's private Windows directory; specifying a full pathname
	could give multiple users access to the same file.
	
	Initialization files that need to be shared among all users are the
	exception to this rule. Make sure that such files cannot be left in an
	inconsistent state if multiple users update them simultaneously.
	
	For a full description of the initialization file functions, see the
	Windows SDK (Software Development Kit) reference manual.
	
	=======================================================================
	            CALLING NETWORK SOFTWARE IN PROTECTED MODE
	=======================================================================
	
	Windows-based applications running in protected mode require special
	support whenever they make a function call to real-mode software. This
	includes calls to MS-DOS, the BIOS, or a network. However, applications
	that are not based on Windows but are running with Windows do not require
	this special support because they always run in real or virtual-8086 mode.
	
	The main support required is called "API mapping." If the arguments to the
	call include pointers to data, that data should be copied down into the
	first 1 MB of address space to ensure that the real-mode software can
	access it. The processor is then switched into real or virtual-8086 mode to
	ensure that the real-mode software can process the call. Finally, when that
	call returns, any data it modified is copied back up to the caller's
	protected-mode address.
	
	Fortunately, most applications interact with the network only indirectly,
	by using MS-DOS functions to manipulate files on redirected drive letters,
	or by using MS-DOS or BIOS calls to print to a remote printer using
	redirected printer ports. Windows-based applications can continue to
	perform these functions normally because Windows automatically maps
	standard MS-DOS and BIOS calls.
	
	However, some applications need to use functions that are specific to a
	particular network or networking protocol. Some part of the software must
	map these APIs, and in some cases this may require special procedures on
	the part of the programmer.
	
	The remainder of this document describes programming considerations for
	designing Windows-based applications that use the following networking
	protocols and networks:
	
	- Microsoft Networks and MS-DOS network functions
	- NetBIOS functions
	- Microsoft LAN Manager-based networks
	- Novell NetWare
	- Ungermann-Bass Net/One
	- Banyan VINES
	
	MICROSOFT NETWORKS AND MS-DOS NETWORK FUNCTIONS
	===============================================
	
	Many networks on the market today are based on the Microsoft Network
	standard, also known as MS-NET. These networks support a set of standard MS-
	DOS functions that perform network activities, such as redirecting drive
	letters.
	
	Windows automatically handles these MS-DOS functions. However, to maintain
	compatibility with future Windows products, the application should not make
	MS-DOS calls by executing an INT 21H instruction. Instead, it should set up
	all the registers for executing the INT 21H and then make a far call to the
	Windows DOS3Call() function.
	
	See the Windows SDK reference manual for a full description of the
	DOS3Call() function. See the "MS-DOS Encyclopedia," available from
	Microsoft Press, for more information on Microsoft Network functions.
	
	NETBIOS FUNCTIONS
	=================
	
	NetBIOS is the most widely used networking API. These functions are
	normally called using INT 5CH. Windows handles most NetBIOS functions.
	However, to maintain compatibility with future Windows products, the
	application should not make the NetBIOS call by executing an INT 5CH
	instruction. Instead, it should set up all the registers for executing the
	INT 5CH, and then make a far call to the Windows NetBIOSCall() function.
	
	The following rarely-used NetBIOS functions are not supported:
	
	  Function  Description
	  --------  -----------
	
	  71H       Send.No.Ack
	  72H       Chain.Send.No.Ack
	  73H       Lan.Status.Alert
	  78H       Find.Name
	  79H       Trace
	
	See the Windows SDK reference manual for a full description of the
	NetBIOSCall() function. See the "IBM Local Area Network Technical
	Reference" for more information on NetBIOS.
	
	LAN MANAGER-BASED NETWORKS
	==========================
	
	Networks based on Microsoft LAN Manager can be installed in either Basic or
	Enhanced versions.
	
	All versions of LAN Manager support MS-NET and NetBIOS functions. However,
	if LAN Manager Enhanced is being used with the API option, applications can
	also use a powerful set of networking functions.
	
	Applications that are not based on Windows can call these functions by
	linking with DOSNET.LIB, a static library provided with the network
	software. However, Windows-based applications must use DLLs (Dynamic-Link
	Libraries) called NETAPI.DLL and PMSPL.DLL, which are distributed on every
	LAN Manager version 2.x Enhanced workstation. Note that these DLLs will not
	run on LAN Manager version 1.x or 2.x Basic; therefore, these functions may
	only be used on LAN Manager version 2.x Enhanced.
	
	See the "Microsoft LAN Manager Programmer's Reference" for more details on
	writing Windows-based applications for LAN Manager.
	
	NOVELL NETWARE
	==============
	
	Novell NetWare supports MS-NET and, optionally, NetBIOS functions, which
	are described earlier in this document.
	
	In addition, Novell NetWare also supports the NetWare and IPX/SPX API sets,
	all based on INT 21H.
	
	Windows-based applications can make NetWare calls; however, this cannot be
	done by executing the INT 21H directly because this method is not supported
	in all Windows operating modes. Instead, the INT 21H instruction should be
	replaced with a far call to the NetWareRequest() function. This function is
	exported by name from the NetWare DLL, and should be imported to the module-
	definition (.DEF) file as NetWare.NetWareRequest.
	
	UNGERMANN-BASS NET/ONE
	======================
	
	Ungermann-Bass Net/One is based upon the Microsoft Network standard. It
	supports standard MS-NET and most NetBIOS functions, which are described
	earlier in this document.
	
	Net/One also supports private extensions to the NetBIOS function set
	(functions 72H-7DH). These functions are supported by the standard
	Windows product. These functions can be called as standard NetBIOS
	functions would be called, by making a far call to the NetBIOSCall
	function.
	
	BANYAN VINES
	============
	
	Banyan VINES supports the standard MS-NET and, optionally, NetBIOS
	functions. There is also a toolkit for applications that write directly to
	the VINES API.
	
	Windows-based applications can call the MS-NET and NetBIOS functions as
	previously described.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbnetwork kbAPI kbSDKPlatform kbOSWin310 kbOSWin300 kbGrpDSNet 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

{% endraw %}
