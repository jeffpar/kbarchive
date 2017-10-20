---
layout: page
title: "Q59138: Mac Wkst: Preferences Not Active or Updating Correctly"
permalink: /kb/059/Q59138/
---

## Q59138: Mac Wkst: Preferences Not Active or Updating Correctly

{% raw %}

	Article: Q59138
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:2.0,2.0a,2.0b,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, versions 2.0, 2.0a, 2.0b, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Under the When New Mail Is Received category in the Microsoft Mail Preferences
	dialog box, if any of the following options do not behave as expected
	
	  Display Notifier Window
	  Display Flashing Menu Bar Icon
	  Sound Chime
	  Display Urgent Messages Immediately
	
	the problem may be related to the Microsoft Mail desk accessory (DA).
	
	If a program or DA that allows a desk accessory to be repositioned or renamed is
	used to alter the Mail DA, incompatibilities with the actual Mail DA may result.
	If it is named anything other than "Microsoft Mail 2.0" for version 2.00 and
	"Microsoft Mail" for version 3.00, the When New Mail Is Received options will
	not work correctly. Any trailing or extra leading characters will also cause
	problems.
	
	For example, Suitcase II is a program that can cause this problem. If the Mail
	DA's name is changed or if the DA is forced to the top of the list, the When New
	Mail Is Received options will not work correctly.
	
	Additional query words: 2.00 2.00a 2.00b 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN300 kbMailATN200 kbMailATN200a kbMailATN200b
	Version           : WINDOWS:2.0,2.0a,2.0b,3.0
	
	=============================================================================
	

{% endraw %}
