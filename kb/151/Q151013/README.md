---
layout: page
title: "Q151013: XCLN: PC Mail Users Cannot Open Macintosh Attachments"
permalink: /kb/151/Q151013/
---

## Q151013: XCLN: PC Mail Users Cannot Open Macintosh Attachments

{% raw %}

	Article: Q151013
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 26-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Macintosh client, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you send an attachment from a Microsoft Exchange client for Macintosh to a
	PC Mail (SFS product; v3.5) Windows client, the attachment will be damaged. The
	file name and file type information is lost. When you try to open the attachment
	from the PC Mail Client, the following error will be generated:
	
	  The application or the attached file <filename> (or one of its
	  components) could not be found.
	
	WORKAROUND
	==========
	
	From the PC Mail client, save the file to the hard drive. If the correct DOS
	file extension is known, use the appropriate extension. Otherwise, save as
	<filename>.doc. The filename will be lost, but the file can still be
	viewed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange version 4.0
	Windows client. This problem was corrected in the latest Microsoft Exchange
	Server U.S. Service Pack. For information on obtaining the Service Pack, query
	on the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbHWMAC kbOSMAC kbExchangeSearch kbExchangeClientSearch kbExchange400Mac
	Version           : WINDOWS:4.0
	
	=============================================================================
	

{% endraw %}
