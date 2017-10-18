---
layout: page
title: "Q138596: Microsoft Service for NetWare Directory Services Readme.txt"
permalink: kb/138/Q138596/
---

## Q138596: Microsoft Service for NetWare Directory Services Readme.txt

	Article: Q138596
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains a copy of the information in the Readme.txt file from
	Microsoft Service for NetWare Directory Services (NDS).
	
	MORE INFORMATION
	================
	
	     --------------------------------------------------------------
	     Microsoft Service for NetWare Directory Services (NDS)  README
	                  October l995
	     --------------------------------------------------------------
	        (c) Copyright Microsoft Corporation, 1995
	
	------------------------
	HOW TO USE THIS DOCUMENT
	------------------------
	
	To view Readme.txt onscreen in Notepad, maximize the Notepad window.
	
	To print Readme.txt, open it in Notepad or another word processor,
	then use the Print command on the File menu.
	
	--------
	CONTENTS
	--------
	
	INSTALLING THE SERVICE FOR NDS
	UNINSTALLING THE SERVICE FOR NDS
	OTHER DOCUMENTATION FOR THE SERVICE FOR NDS
	RUNNING NDS-AWARE APPLICATIONS
	KNOWN ISSUES
	AVAILABILITY IN OTHER LANGUAGES
	PRODUCT SUPPORT INFORMATION
	
	INSTALLING THE SERVICE FOR NDS
	==============================
	
	If you already have Windows 95 installed, and you wish to install the
	Service for NDS, you must do this via the Network Control Panel.
	Thus, if you wish to install it on multiple computers running Windows
	95, you will have to do this on each computer.
	
	To install the Service for NDS on a computer running Windows 95,
	follow these steps:
	1. In Control Panel, double-click the Network icon
	2. Click Add.
	3. Double-click Service.
	4. Click Have Disk, and then type the drive name for the disk or
	network drive where the Service for NDS files are located.
	
	WARNING  Do not click Cancel during the installation. If, for some
	reason, you decide that you do not want to install the Service for
	NDS, you must complete the installation process, and then remove the
	Service for NDS. For more information on removing the Service for
	NDS, see UNINSTALLING THE SERVICE FOR NDS in this document.
	
	5. The next time you start your computer, you are prompted to log in
	to the NDS tree. Make sure the dialog box refers to the correct
	context and tree.
	
	If you wish to install Service for NDS at the same time that you
	install Windows 95, you may do so in either of the following two
	ways:
	1. You may include Service for NDS in an automated installation of
	Windows 95. Automated installation uses a file called MSBATCH.INF in
	order to install Windows 95 without requiring any user intervention.
	Because you can include Service for NDS in this procedure, you will
	not have to install it separately at each computer.
	2. You may install Service for NDS from within the Windows 95 setup
	program. During Windows 95 setup, choose to do a "Custom"
	installation. At the Network Configuration screen during setup,
	follow steps 2-5 above.
	
	You can also include Microsoft Service for NDS in server-based
	installations of Windows 95.
	
	For more information about these options, please refer to the
	MSNDS.HLP file included with the Service for NDS. This help file must
	be viewed on a computer running Windows 95.
	
	UNINSTALLING THE SERVICE FOR NDS
	================================
	Note:  You cannot remove the Service for NDS from a computer running
	a shared installation of Windows 95.
	
	Before you begin, make sure your Windows 95 Setup disk is nearby.
	During the removal process, you are prompted for files located on it.
	
	1. In Control Panel, double-click the Network icon.
	2. Click Service for NetWare Directory Services, and then click Remove.
	
	Note:  When Windows 95 is copying networking files from your Windows
	95 Setup disk, a message will appear several times, saying that older
	versions of files are being copied to your computer, and asking
	whether you want to keep the newer version that is currently on your
	computer. In order to remove the Service for NDS, click No for the
	following files: NWREDIR.VXD, NWNP32.DLL, and NETWARE.TMP.
	
	OTHER DOCUMENTATION FOR THE SERVICE FOR NDS
	===========================================
	For detailed information about installing, configuring, and using
	Service for NDS, see MSNDS.HLP, which is included in this
	distribution of Service for NDS. This help file must be viewed on a
	computer running Windows 95.
	
	RUNNING NDS-AWARE APPLICATIONS
	==============================
	If your users need to run NetWare applications (including NDS ones)
	with Windows 95 and Service for NDS, they will need access to, and
	the appropriate license to use, the following Novell-supplied files:
	
	NWCALLS.DLL
	NWLOCALE.DLL
	NWIPXSPX.DLL
	NWNET.DLL
	NWGDI.DLL
	NWPSRV.DLL
	
	These DLLs are also needed if you wish to use the Passwords option in
	Control Panel in order to change passwords on bindery servers.
	
	The Microsoft Service for NDS searches for these files in locations
	in the user's search path statement. If you put these files in a
	directory on a server, make sure the directory is in each of your
	users' search path statements. We recommend that you place these
	files in the SYS:PUBLIC directory of your users' preferred servers.
	
	Some third-party NDS-aware applications expect these Novell DLLs to
	be loaded. Service for NDS does not load these DLL's by default, but
	there is a system policy you can set to have these dll's loaded. See
	MSNDS.HLP for more information.
	
	Many third-party NDS-aware applications access the unicode tables in
	the PUBLIC\NLS directory on the server. It is important that you put
	this directory in your search path (by mapping a search drive) in
	order to run such applications. If the NLS directory is not in the
	search path, the application may show an error message stating that
	the unicode tables could not be found, or that the Context could not
	be set.
	
	KNOWN ISSUES
	============
	
	ADDING PRINTERS: BROWSING FOR NDS PRINTERS FROM THE ADD PRINTER WIZARD
	----------------------------------------------------------------------
	If you choose "Browse" from the Add Printer wizard, you will not be
	able to see NDS printers. (You will see bindery printers). There will
	soon be an update to a Windows 95 component named SHELL32.DLL that
	will fix this. This fix can be found in the same online location as
	the Service For NDS. For example, on the World Wide Web, go to
	http://www.microsoft.com/windows. From there, go to the Software
	Library, then to Windows 95 Updates.
	
	Warning: do not update to this new English version of SHELL32.DLL if
	you are not running an English version of Windows 95. Localized
	versions will be made available at a later date.
	
	BRIEFCASE: COPYING FILES FROM A DRIVE LETTER THAT IS MAPPED TO THE ROOT
	-----------------------------------------------------------------------
	Copying a file to the Briefcase from a network drive that is mapped
	to the root does not work in Service for NDS.
	
	WINPOPUP: SENDING MESSAGES TO NDS USERS
	---------------------------------------
	Winpopup allows you to receive NetWare messages. However, it does not
	allow you to send messages to NDS users. You can send messages to
	bindery users. You may use Novell's SEND command or the NETUSER
	utility to send messages to NDS users.
	
	RUNNING NT AND NETWARE LOGIN SCRIPTS
	------------------------------------
	If you are running both the Service for NDS and the Client for
	Microsoft networks, Windows NT login scripts will always run before
	NetWare login scripts, regardless of which client is primary.
	
	AVAILABILITY IN OTHER LANGUAGES
	===============================
	As of this writing (October 13, 1995), the Service for NDS is
	available in English only. A German version will be made available
	near the end of October. Some other localized versions will be made
	available in the next few months. It is possible to use the English
	version of Service for NDS with some localized versions of Windows
	95. However, some of the user interface will then be in English.
	
	PRODUCT SUPPORT INFORMATION
	===========================
	The support policy for Service for NDS is the same as the Windows 95
	support policy. See SUPPORT.TXT in the Windows directory for detailed
	information about Windows 95 product support.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
