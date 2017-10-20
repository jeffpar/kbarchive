---
layout: page
title: "Q97677: Debug Script to Test for Windows Sound System Presence"
permalink: /kb/097/Q97677/
---

## Q97677: Debug Script to Test for Windows Sound System Presence

{% raw %}

	Article: Q97677
	Product(s): Miscellaneous Windows Products
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Sound System, versions 1.0, 1.0a, 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Under certain conditions it may be necessary to ensure that MS-DOS recognizes
	the presence of the Windows Sound System board. The following MS-DOS Debug
	script can be used to test for the presence of the hardware that ships with
	Windows Sound System versions 1.0 and 1.0a. The following example assumes that
	the Base I/O address on the card is set for 530.
	
	1. At the MS-DOS command prompt, type "debug" (without the quotation marks).
	  This command starts Debug, a program that allows you to test and debug
	  executable files. When Debug is started, the prompt will be a hyphen (-).
	
	2. Type "i 534" (without the quotation marks). This command reads and displays
	  the byte value at the specified port address. If your port address is
	  something other than 530, type "i XXX" (without the quotation marks), where
	  XXX represents your port address plus 4. The returned value should be 01.
	
	3. Type "o 534 c" (without the quotation marks). This command sends the value of
	  a byte to the specified output port. If your port address is something other
	  than 530, type "i XXX" (without the quotation marks), where XXX represents
	  your port address plus 4.
	
	4. Type "i 535" (without the quotation marks). This command reads and displays
	  the byte value at the specified port address. If your port address is
	  something other than 530, type "i XXX" (without the quotation marks), where
	  XXX represents your port address plus 5. The returned value should be 09.
	
	5. Type "i 533" (without the quotation marks). This command reads and displays
	  the byte value at the specified port address. If your port address is
	  something other than 530, type "i XXX" (without the quotation marks), where
	  XXX represents your port address plus 3. The returned valued should be 4.
	
	If the returned values are other than those stated above, MS-DOS is not able to
	sense the presence of the Windows Sound System hardware. You may want to try
	setting the board at a different port address and see if the Windows Sound
	System drivers install. If this test fails with the other settings it could be
	the result of a damaged board or other hardware conflict.
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbWinSoundSysSearch kbWinSoundSys100 kbWinSoundSys100a kbWinSoundSys200
	
	=============================================================================
	

{% endraw %}
