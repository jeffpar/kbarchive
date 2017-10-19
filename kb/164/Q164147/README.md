---
layout: page
title: "Q164147: Internet Information Server Will Not Re-install"
permalink: /kb/164/Q164147/
---

## Q164147: Internet Information Server Will Not Re-install

	Article: Q164147
	Product(s): Internet Information Server
	Version(s): 2.0,3.0
	Operating System(s): 
	Keyword(s): kbsetup kbusage
	Last Modified: 01-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it
	if a problem occurs. For information on how to do this, view the "Restoring
	the Registry" online Help topic in Regedit.exe or the "Restoring a Registry
	Key" online Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	When you attempt to install Microsoft Internet Information Server (IIS) or Peer
	Web Server, you may see the following error message:
	
	  Microsoft Internet Information Server may be installed by another
	  process. Please restart your Network Control Panel applet.
	
	CAUSE
	=====
	
	This can occur because you are trying to re-install IIS without uninstalling it,
	or because you had a failed installation of IIS.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" online Help topic in Registry Editor (Regedit.exe) or the "Add and
	Delete Information in the Registry" and "Edit Registry Data" online Help topics
	in Regedt32.exe. Note that you should back up the registry before you edit it.
	
	- If you are unable to run the uninstall sucessfully, or if you still get the
	  error message after running the uninstall program, use the Registry Editor to
	  remove the following keys:
	
	     HKEY_LOCAL_MACHINE\Software\Microsoft\InetMgr
	     HKEY_LOCAL_MACHINE\Software\Microsoft\InetStp
	     HKEY_LOCAL_MACHINE\Software\Microsoft\InetSrv
	
	NOTE: Not all of these keys will necessarily be present, but be sure to remove
	every one of them that does show up.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup kbusage 
	Technology        : kbiisSearch kbiis300 kbiis200
	Version           : :2.0,3.0
	
	=============================================================================
	
