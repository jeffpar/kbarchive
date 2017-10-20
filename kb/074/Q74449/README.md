---
layout: page
title: "Q74449: DOSSHELL.INI and Password Encryption"
permalink: /kb/074/Q74449/
---

## Q74449: DOSSHELL.INI and Password Encryption

{% raw %}

	Article: Q74449
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	MS-DOS Shell allows you to create program items and groups with password
	protection. The password can be entered either through Shell when the
	program/group item is created, or manually by adding the appropriate lines under
	the [programstarter] section in the DOSSHELL.INI file.
	
	MORE INFORMATION
	================
	
	Adding a program/group item through Shell with a password containing lowercase
	letters results in the rewritten DOSSHELL.INI file to remap the lowercase
	letters of the password to uppercase, six alphabetic characters away from the
	original letter. For example, if you enter the password
	
	  abcd
	
	it will be written to the DOSSHELL.INI password section as
	
	  password = GHIJ
	
	Thus, a = G
	
	  b = H
	  c = I
	  d = J
	  e = K
	  f = L
	  g = M, and so on.
	
	If you manually edit the DOSSHELL.INI file and enter a password with any
	lowercase letters, the program/group item will not be accessible when prompted
	for the password, even if you type it exactly as it was entered. If you manually
	edit DOSSHELL.INI and change the password to all capital letters, the password
	will not be encrypted.
	
	Example
	-------
	
	1. In the MS-DOS Shell main window, highlight Command Prompt.
	
	2. From the File menu, choose Properties. In the Password text box, enter "abcd"
	  (without the quotation marks). To run the command prompt from now on, you
	  must enter the password abcd.
	
	3. Open DOSSHELL.INI in MS-DOS Editor.
	
	4. Note that the password for Command Prompt is encrypted as GHIJ.
	
	5. Change the password to ZZZZ and save the file.
	
	The password to start the command prompt is now ZZZZ.
	
	Additional query words: 5.00 5.00a 6.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0
	
	=============================================================================
	

{% endraw %}
