---
layout: page
title: "Q153699: XFOR: The character set files could not be found."
permalink: /kb/153/Q153699/
---

## Q153699: XFOR: The character set files could not be found.

{% raw %}

	Article: Q153699
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When getting properties on the IMC, Administrator reports the following three
	errors:
	
	  The character set files could not be found. Current settings will be shown.
	
	  The MIME character set that is currently configured is shown, but is no
	  longer available. Check the character sets to ensure that they have been
	  installed correctly.
	
	  The non-MIME character set that is currently configured is shown, but is no
	  longer available. Check the character sets to ensure that they have been
	  installed correctly.
	
	MORE INFORMATION
	================
	
	1. Verify that a TRN file is available for the MIME and non-MIME character set
	  (that is, ANSI.TRN and ISO88591.TRN by default).
	
	2. Verify the share point for the \Exchsrvr\Connect directory. If the share is
	  missing, re-create it as connect$ share, give the Service Account and
	  Administrators' group full permissions, and give Everyone read permissions.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	
	=============================================================================
	

{% endraw %}
