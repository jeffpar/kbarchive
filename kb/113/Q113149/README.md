---
layout: page
title: "Q113149: PC Win: Err Msg: A Folder Could Not Be Accessed"
permalink: /kb/113/Q113149/
---

## Q113149: PC Win: Err Msg: A Folder Could Not Be Accessed

{% raw %}

	Article: Q113149
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you access shared or group folders and you select or double-click a shared
	folder, the following error message may appear:
	
	  A folder could not be accessed
	
	In addition, when you try to delete a shared folder, the following error message
	may appear:
	
	  The folder could not be completely deleted.
	
	CAUSE
	=====
	
	When a private, shared, or group folder is created, it is given a unique ID
	number. This unique number is generated from the SERIALNO.IDX file. The
	Microsoft Mail MS-DOS workstation can access folder names from 00000000.FLD
	through FFFFFFFF.FLD. Microsoft Mail for Windows should be able to access the
	same range of shared and group folders; however, it can only access folder names
	from 00000000.FLD through 00FFFFFF.FLD. When a shared or group folder has an ID
	number of 01000000 or greater, the Windows client displays the above error
	message.
	
	The MS-DOS client has no problem with folder names in this range.
	
	RESOLUTION
	==========
	
	The following is a temporary workaround that allows you to access shared and
	group folders that can't be accessed by the Windows client:
	
	Reset SERIALNO.IDX to 00 00 00 00
	---------------------------------
	
	1. Create a backup copy of and run DEBUG on a backup of the SERIALNO.IDX file.
	  For example, type:
	
	  "debug serialno.idx" (without the quotation marks)
	
	  NOTE: Perform this operation on the backup only.
	
	2. At the hyphen (-) prompt, type the following and then press ENTER to display
	  the value of the counter:
	
	  "d100 103" (without the quotation marks)
	
	  The following is an example of a bad counter value:
	
	  xxxx:0100 3C 56 4F 4D
	
	  This is equivalent to a folder name of 4D4F563C.FLD, which is out of the
	  Windows client range.
	
	3. To correct the bad counter value, reset the count back to 00000000 by typing
	  the following and then pressing ENTER:
	
	  "f 100,103,0" (without the quotation marks)
	
	4. To verify that the values are reset to zeros, type the following at the
	  hyphen prompt:
	
	  "d100 103" (without the quotation marks)
	
	5. To save the corrections, type "W" (without the quotation marks) at the hyphen
	  prompt. The following message will appear:
	
	  Writing 00004 bytes
	
	  This message indicates that the data was written to the file.
	
	6. At the hyphen prompt, type "Q" (without the quotation marks) to quit DEBUG.
	
	  These steps will fix the out-of-range folder counter generator. If a folder
	  already exists with the value in the SERIALNO.IDX file, the Mail program will
	  not reuse the number.
	
	7. Copy the newly modified SERIALNO.BAK over the original SERIALNO.IDX.
	
	Recover the Problem Folder
	--------------------------
	
	The owner or creator of the shared and group folders should perform the following
	steps:
	
	1. Use the Microsoft Mail MS-DOS client to create a temporary working folder.
	  Move the mail message from the problem folder to the temporary folder.
	
	2. Delete the problem folder and then re-create it. Because the SERIALNO.IDX
	  file has been reset to zero, a new folder will have the folder-name number
	  within the range the Windows client can handle.
	
	3. Move the mail message back to the original folder.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in versions 3.0, 3.0b, and 3.2 of
	Microsoft Mail for Windows. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 3.00b 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN300b
	Version           : WINDOWS:3.0,3.0b,3.2
	
	=============================================================================
	

{% endraw %}
