---
layout: page
title: "Q95470: Disabling Peer-To-Peer Network Functionality with WFWG"
permalink: /kb/095/Q95470/
---

## Q95470: Disabling Peer-To-Peer Network Functionality with WFWG

	Article: Q95470
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	The following article contains information on the use of Windows for
	Workgroups with third-party products or configurations that have not been
	tested and are not supported by Microsoft.
	
	If the steps or procedures described in this article do not function
	properly, contact the manufacturer of the third-party product for more
	information or use a supported configuration.
	
	SUMMARY
	=======
	
	Although Microsoft Windows for Workgroups is designed to provide peer-to- peer
	networking functions (such as local file sharing and local printer sharing), you
	may occasionally need to disable the ability to share local resources, or you
	may need to disable network functionality completely.
	
	NOTE: This article applies to version 3.1 of Microsoft Windows for Workgroups. It
	does not apply to later versions of the product. Windows for Workgroups version
	3.11 allows you to do this during installation and through Network Setup.
	
	This article contains procedures to disable various features and capabilities of
	Windows for Workgroups. You can re-enable a feature by reversing the procedure.
	
	MORE INFORMATION
	================
	
	To Disable Sharing Local Resources
	----------------------------------
	
	To disable the ability to share local resources (both files and printers), while
	maintaining the ability to connect to other network servers, follow these
	steps:
	
	1. Clear the Enable Sharing box in the Network Settings dialog box of Control
	  Panel.
	
	2. Use a text editor (such as Notepad) to add the following entry to the
	  [network] section of the SYSTEM.INI file located in the Windows directory:
	
	        [network]
	        NoSharingControl=1
	
	To Disable Sharing Local Files
	------------------------------
	
	To disable the ability to share resources (files) from the File Manager, use a
	text editor to modify the WINFILE.INI file in the Windows directory, and add the
	following section heading and entry:
	
	     [restrictions]<BR/>
	     NoShareCommands=1
	
	To Disable Sharing Local Printers
	---------------------------------
	
	To disable the ability to share local print resources from Print Manager, use a
	text editor to modify the WIN.INI file in the Windows directory. Add the
	following line to the [Spooler] section of the file:
	
	      NoShareCommands=1
	
	To Disable All Network Functionality
	------------------------------------
	
	To disable network functionality completely, including the ability to share local
	resources, use a text editor to modify the [boot] section of the SYSTEM.INI file
	located in the Windows directory. Change the "network.drv=" entry from:
	
	      network.drv=wfwnet.drv
	
	to:
	
	      network.drv=
	
	NOTE: It is not possible to disable local printer sharing without also disabling
	local file sharing.
	
	KBCategory: kbnetwork kbusage kb3rdparty
	KBSubcategory: wfw wfwg
	
	Additional query words: 3.10 whitepaper no net nonet
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
