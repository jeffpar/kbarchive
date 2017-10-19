---
layout: page
title: "Q90561: New Files Included with Windows for Workgroups 3.1"
permalink: /kb/090/Q90561/
---

## Q90561: New Files Included with Windows for Workgroups 3.1

	Article: Q90561
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-SEP-1999
	
	3.10
	
	WINDOWS
	
	kbnetwork kbref
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article lists the new files included with Windows for Workgroups version
	3.1 and a description of their function.
	
	MORE INFORMATION
	================
	
	New VxDs        Description
	-----------------------------------------------
	
	VREDIR.386      Enhanced mode virtual redirector
	VSERVER.386     File and print serving
	VNETBIOS.386    The NetBIOS interface
	VNB.386         The NetBEUI protocol
	VBROWSE.386     Browsing services used by File Manager/Print Manager
	VSHARE.386      Virtualized version of SHARE.EXE
	VNETSUP.386     Provides various network support functions for
	               VREDIR.386, VSERVER.386, VNB.386, and VBROWSE.386
	VNETWARE.386    Used to allow NetWare connectivity with multiple
	               MS-DOS virtual machines
	
	New DLLs        Description
	----------------------------------------------------------------------
	
	AB.DLL          Workgroup Mail's Address Book Name Service provider; it
	               supplies to PO List and the Personal Address Book
	COMMCTRL.DLL    Contains internal custom control user interface
	               functions
	DEMILAYR.DLL    Workgroup applications system services layer functions
	FRAMEWRK.DLL    Workgroup applications application framework layer
	               functions
	MAILMGR.DLL     Workgroup Mail's manager of API support functions
	MAPI.DLL        Provides access to simple Mail application programming
	               interface (API)
	MSSCHED.DLL     Handles scheduling of events for Schedule+
	MSSFS.DLL       Workgroup Mail Shared File System Transport Provider; it
	               sends and retrieves messages to the PO database
	NETBIOS.DLL     Provides access to the NetBIOS interface
	NDDEAPI.DLL     Provides access to the Network DDE API
	NETAPI.DLL      Provides new network related APIs to Windows for
	               Workgroups
	SCHEDMSG.DLL    Handles Schedule+'s message forms for interfacing with
	               Workgroup Connections Mail
	SENDFILE.DLL    Sends files as attachments
	STORE.DLL       Message Store Provider that manages the MMF (folders,
	               messages, and attachments)
	TRNSCHED.DLL    Provides access to offline and PO calendar file (*.CAL)
	VFORMS.DLL      Provides the workgroup Mail forms
	WFWSETUP.DLL    The network setup extension for Control Panel
	WGPOMGR.DLL     Allows creation of PO and MMF during installation;
	               allows the PO owner to manage accounts from within
	               Workgroup mail
	
	New EXEs        Description
	-----------------------------------------------------------------------
	CLIPSVR.EXE     Utility for handling ClipBook's DDE server backgroup
	               processes
	MSHEARTS.EXE    NetDDE game of Hearts
	MAILSPL.EXE     Program in Workgroup Mail that spools messages from the
	               Outbox to the PO and checks for new messages, which it
	               places in the Inbox
	MSMAIL.EXE      Workgroup Mail application
	MSREMIND.EXE    Workgroup Schedule+ reminder program
	NET.EXE         Real-mode redirector that interfaces with the NetBEUI
	               protocol and provides the NET command line utilities
	NETDDE.EXE      Program providing network dynamic data exchange (DDE)
	NETWATCH.EXE    Program provided to check existing connections on a
	               Windows for Workgroups server
	PROTMAN.EXE     Protocol manager, which handles the appropriate
	               ordering of drivers loaded in CONFIG.SYS during the
	               binding process initiated by the "net start" command in
	               AUTOEXEC.BAT
	SCHDPLUS.EXE    Workgroup Schedule+ program
	WINCHAT.EXE     Network DDE based program for online communication
	               with another machine within the workgroup
	WINMETER.EXE    Program for checking CPU activity on a server
	
	Other New Files   Description
	--------------------------------------------------------------------
	
	MSIPX.COM       Similar to the earlier version of IPX.COM, which was
	               bound to a driver for a particular network adapter;
	               is bound to a smaller piece of code called MSIPX.SYS
	               that looks like a network adapter to IPX and provides
	               an NDIS interface to PROTMAN.DOS.
	MSIPX.SYS       NDIS small piece of code that allows MSIPX.COM to
	               communicate with NDIS drivers
	NET.MSG         Real-mode redirector help message file
	NWPOPUP.COM     Provides the user interface for the NetWare messaging
	               system; is unchanged from generic NetWare/Windows 3.1.
	NETWARE.DRV     NetWare driver that is called when the NetWare
	               button is pressed within File Manager/Print Manager; is
	               unchanged from generic NetWare/Windows 3.1
	PROH.MSG        Protocol manager message file
	PROTMAN.DOS     Driver (protocol manager) that provides an NDIS
	               interface and allows for multiple protocols and network
	               adapters within the same PC
	WORKGRP.SYS     Real-mode stub for the real mode network redirector
	WFWNET.DRV      Driver that is responsible for sharing files and
	               browsing shares
	
	
	Additional query words: WC 3.10 shim real mode addon file manager
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
