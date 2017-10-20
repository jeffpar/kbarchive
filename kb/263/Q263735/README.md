---
layout: page
title: "Q263735: Incorrect Content Rating PICS Date When Time Zone Is East of GMT"
permalink: /kb/263/Q263735/
---

## Q263735: Incorrect Content Rating PICS Date When Time Zone Is East of GMT

{% raw %}

	Article: Q263735
	Product(s): Internet Information Server
	Version(s): 4.0,5.01
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	- Microsoft Internet Explorer version 5.01 for Windows NT 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Internet Explorer, an error message similar to the following may occur:
	
	  The rating label on this page is invalid. "2001.05.22T12:00--200" is not
	  recognized or is not the right format. You may want to notify the owner of
	  this site.
	
	This error message only occurs if the time zone in the Regional Settings on the
	server has been set to east of GMT when you set the content rating.
	
	CAUSE
	=====
	
	An invalid time/date string for the PICS label is written to the metabase. In
	this case, the metabase contains the following time/date string:
	
	  2001.05.22T12:00--200
	
	The correct string is as follows:
	
	  2001.05.22T12:00+0200
	
	RESOLUTION
	==========
	
	This issue is resolved in Windows 2000. Install Windows 2000.
	
	WORKAROUND
	==========
	
	To work around this problem, set the time zone of the server to west of GMT when
	you set the content rating on the server.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbIEsearch kbiis400 kbZNotKeyword2 kbIENT400Search kbIE500Search kbZNotKeyword3 kbIE501WinNT400
	Version           : :4.0,5.01
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
