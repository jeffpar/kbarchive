---
layout: page
title: "Q128723: HOWTO: Reference a Time on the Command Line"
permalink: /kb/128/Q128723/
---

## Q128723: HOWTO: Reference a Time on the Command Line

{% raw %}

	Article: Q128723
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbSSafe400 kbSSafe500 kbSSafe600 kbSSafe310 kbSSafe304
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 4.0, 5.0, 6.0 
	- Microsoft SourceSafe for Macintosh, versions 3.04, 3.1 
	- Microsoft SourceSafe for MS-DOS, versions 3.04, 3.1 
	- Microsoft SourceSafe for UNIX, versions 3.04, 3.1 
	- Microsoft SourceSafe for Windows, versions 3.04, 3.1 
	- Microsoft SourceSafe for Windows NT, versions 3.04, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To reference a time along with the date in a SourceSafe command, reference both
	the time and the date by using the -vd switch.
	
	For example, to list the history of the $/test project from 9am to 3pm on 3/3/95,
	use this command:
	
	  ss history $/test -vd3/03/95;3:00p~3/03/95;9:00a
	
	In this command, 'a' or 'p' refers to AM or PM respectively. In addition, the '~'
	is used to indicate the history between the date and times specified.
	
	The order of the date and time arguments are important. The later date and time
	should come first and the earlier date and time should come after the tilde. The
	second time argument should also be less than the actual time you want returned.
	For example, if you want the History back to "8:50", you should specify "8:49".
	
	Additional query words: get checkout
	
	======================================================================
	Keywords          : kbSSafe400 kbSSafe500 kbSSafe600 kbSSafe310 kbSSafe304 
	Technology        : kbHWMAC kbOSMAC kbSSafeSearch kbAudDeveloper kbZNotKeyword2 kbZNotKeyword3 kbSSafe304 kbSSafe304DOS kbSSafe310 kbSSafe310DOS kbSSafe304Mac kbSSafe310Mac kbSSafe304UNIX kbSSafe310UNIX kbSSafe600 kbSSafe400 kbSSafe500 kbSSafe304NT kbSSafe310NT
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
