---
layout: page
title: "Q140790: MS Backup Err Msg: Errors Occurred During This Operation..."
permalink: /kb/140/Q140790/
---

## Q140790: MS Backup Err Msg: Errors Occurred During This Operation...

{% raw %}

	Article: Q140790
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Microsoft Backup to format a QIC-80 2120XL (extended length) tape
	on a Connor Tape Stor 250 tape drive that is controlled by the floppy disk drive
	controller, you may receive the following error message:
	
	  Errors occurred during this operation. Do you want to view them now?
	
	The error log reports the following information:
	
	  Error/Warnings during operation:
	  1173(11056,2) - \\ Unknown error.
	  1320(13408,3) - \\ Warning: This operation has been canceled by the system.
	
	  Total number of errors encountered: 2
	
	CAUSE
	=====
	
	This error can occur if you try to format a 2120XL tape on an older Connor Tape
	Stor 250 tape drive. Older drives can be identified by the presence of an eject
	button.
	
	RESOLUTION
	==========
	
	Connor currently has no solution for this problem. Connor advises customers to
	purchase preformatted XL tapes for these older drives. Connor's newer drives
	(without the eject button) do not experience this problem.
	
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
