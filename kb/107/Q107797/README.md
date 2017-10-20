---
layout: page
title: "Q107797: PC Gen: Disk Space Not Checked When Saving Attachments"
permalink: /kb/107/Q107797/
---

## Q107797: PC Gen: Disk Space Not Checked When Saving Attachments

{% raw %}

	Article: Q107797
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1,3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 2.1, 3.0, 3.0b, 3.2 
	- Microsoft Mail for PC Networks, versions 2.1, 3.0, 3.2, on platform(s):
	   - the operating system: MS-DOS 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When saving an attachment associated with a message, Microsoft Mail for Windows
	and Microsoft Mail for PC Networks, MS-DOS workstation do not verify if there is
	enough disk space before attempting to write the file to the desired disk's
	location.
	
	Versions 2.1 through 3.2 of the MS-DOS Mail client and version 2.1 of the Windows
	Mail client will display the following message:
	
	  Notice 13 Disk Full or Error Writing to Disk
	
	Version 3.0 through 3.2 of the Windows Mail client will display the following
	message:
	
	  STOP! An error occurred while writing the file to disk.
	  Check that there is enough disk space and try again.
	
	The status of unavailable disk space on the destination drive is only displayed
	to the user at the point when it occurs, but not prior to initiating the Save
	Attachment action.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in versions 2.1, 3.0, 3.0b, or 3.2
	of Microsoft Mail for Windows and version 2.1, 3.0, or 3.2 of Microsoft Mail for
	PC Networks, MS-DOS workstation. We are researching this problem and will post
	new information here in the Knowledge Base as it becomes available.
	
	
	Additional query words: 2.10 3.00 3.00b 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3
	Version           : WINDOWS:2.1,3.0,3.0b,3.2
	
	=============================================================================
	

{% endraw %}
