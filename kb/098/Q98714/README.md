---
layout: page
title: "Q98714: Mac ARA: Apple Modem and Shiva Dial-In May Produce Give Ups"
permalink: /kb/098/Q98714/
---

## Q98714: Mac ARA: Apple Modem and Shiva Dial-In May Produce Give Ups

{% raw %}

	Article: Q98714
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the built-in Apple 2400 modem and Shiva Dial-In to access version
	3.0 or 3.1 of Microsoft Mail for AppleTalk Networks, the following error message
	may appear:
	
	  Looking for Microsoft Mail Server: Give Up
	
	CAUSE
	=====
	
	Shiva Dial-In version 3.6.6 does not ship with an Apple-brand initialization
	string for the modem. Users should add or change one of the existing strings.
	
	RESOLUTION
	==========
	
	To change the name of an existing string, do the following:
	
	1. Launch the Shiva Modems utility and open the Mac Portable string.
	
	2. Change the name if you want. Next, change the dial string by placing the
	  insertion point just past the "Z" in "ATZ", pressing the DELETE key, then
	  typing an ampersand (&) and an "F". (IMPORTANT: Do not simply highlight
	  the string and replace it; place the insertion point in the string and
	  backspace out any unwanted information.) The string should be the following:
	
	  AT&FS37=6&C1&D3&K4&Q0
	
	MORE INFORMATION
	================
	
	Shiva is locking out all possible settings on the 2400 modem with a "vanilla"
	v.22bis connection, no v.42bis or MNP. This string should be successful with
	almost any Hayes-compatible 2400 v.42bis/MNP data/fax modem.
	
	For additional information, call Shiva Microsystems Corporation at (617)
	252-6400.
	
	
	Additional query words: 3.00 3.10 err msg errmsg alert
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN300 kbMailATN310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

{% endraw %}
