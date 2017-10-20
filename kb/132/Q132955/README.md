---
layout: page
title: "Q132955: PC WRmt: Changing a Remote User from Default to Custom Views"
permalink: /kb/132/Q132955/
---

## Q132955: PC WRmt: Changing a Remote User from Default to Custom Views

{% raw %}

	Article: Q132955
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you change a user from the Default View to a Custom View with the
	Administrator's program (ADMIN.EXE) through the Remote/Modify options, the
	remote user continues to download the Default View.
	
	CAUSE
	=====
	
	The user's configuration has not been updated to the Custom View.
	
	RESOLUTION
	==========
	
	The following procedure may be used to change the user's configuration:
	
	1. After you change the user's view, generate a new Init-Disk from ADMIN.EXE
	  through the Remote/Init-Disk option.
	
	2. Start the Windows Remote client. From the Mail menu, choose Options.
	
	3. From the Options dialog box, select on the Server button.
	
	4. From the Server dialog box, enter the path to the files on the Init-Disk in
	  the User Information/Path field.
	
	  NOTE: If the files are located on a disk in the A: floppy disk drive, enter
	  "A:\" (without the quotation marks).
	
	5. Click OK. If the procedure was performed correctly, the following message
	  will appear:
	
	  The new information will take effect after you exit and sign out.
	  Your sign-on identity will be <mailbox>.
	
	  If the information regarding the mailbox is correct, click OK.
	
	6. At the Options dialog box, click OK.
	
	7. Exit and Sign Out of the Windows Remote client. You must sign back in for the
	  changes to take effect.
	
	MORE INFORMATION
	================
	
	Updating the Init-Disk and the files on the remote workstation is important to
	determine the type of view that will be downloaded. The view changes must be
	updated locally.
	
	Additional query words: 3.00 3.20 winremote rnetwork.glb
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailRemote320
	Version           : WINDOWS:3.2
	
	=============================================================================
	

{% endraw %}
