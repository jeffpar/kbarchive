---
layout: page
title: "Q67941: Removing the Hidden File Attribute"
permalink: /kb/067/Q67941/
---

## Q67941: Removing the Hidden File Attribute

{% raw %}

	Article: Q67941
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to use DEBUG to remove the hidden attribute from files
	on your system.
	
	MORE INFORMATION
	================
	
	The method described below uses DEBUG to create a small program that removes the
	hidden attribute from a file. This method should be used only as a last resort.
	
	1. At the MS-DOS prompt, type the following commands:
	
	     DEBUG
	     A 100
	     mov dx,116
	     mov ax,4300
	   
	     int 21
	     and cx,fffd
	     mov dx,116
	     mov ax,4301
	     int 21
	     int 20
	     <ENTER>
	     E 116 'filename' 0   <------- replace "filename" with the path
	     G                             and filename of the target file.
	                                   Example: e 116 'C:\DATA\TEST.DAT' 0
	
	  When you type the command "G," DEBUG executes the section of code in memory.
	  If you have typed everything correctly, the message "Program terminated
	  normally" is displayed.
	
	2. Type "Q" (without the quotation marks) to quit DEBUG, then verify that the
	  file is no longer hidden.
	
	Code Explanation
	----------------
	
	The following is a detailed description of the preceding code:
	
	  mov dx,116     ; load the offset to filename into dx
	  mov ax,4300    ; load get/set file attributes function number into ax
	   
	  int 21         ; call DOS interrupt 21H to read attribute information
	   
	  and cx,fffd    ; strip off only hidden attribute bit
	  mov dx,116     ; load the offset to filename into dx
	  mov ax,4301    ; load get/set file attributes function number into ax
	   
	  int 21         ; call DOS interrupt 21H to write attribute information
	  int 20         ; terminate program
	
	The program begins by calling Int 21H function 43H to get the current file
	attribute. The attribute byte is returned in register CX, which is then ANDed
	with hex FFFD to reset bit 1. The program calls the get/set file attribute
	function again to write the attribute in register CX to the file.
	
	Additional query words: 6.22 3.20 3.21 3.30 3.30a 4.00 4.01 4.01a 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
