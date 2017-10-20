---
layout: page
title: "Q72776: Mac Wkst: Workstation Installer Can Be Copied to AppleShare Srv"
permalink: /kb/072/Q72776/
---

## Q72776: Mac Wkst: Workstation Installer Can Be Copied to AppleShare Srv

{% raw %}

	Article: Q72776
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Mail workstation disk, named "Microsoft Mail", can be copied to an
	AppleShare server to allow users to connect to the AppleShare server and run the
	Mail workstation Installer.
	
	To do this, copy the contents of the workstation disk to a folder named
	"Microsoft Mail" on the AppleShare server. It is important that the folder be
	named "Microsoft Mail", because the Installer script looks for a folder/disk
	with this name. If the name of the folder is not "Microsoft Mail", the Installer
	will ask you to insert the disk named "Microsoft Mail."
	
	To automate the creation of this folder, drag the workstation disk icon to the
	AppleShare server. The System software will automatically create the appropriate
	folder titled "Microsoft Mail".
	
	MORE INFORMATION
	================
	
	Microsoft has added this feature to meet the needs of large companies with many
	workstations where installing the workstation software by disk can be a
	difficult and time-consuming task.
	
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN300 kbMailATN310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

{% endraw %}
