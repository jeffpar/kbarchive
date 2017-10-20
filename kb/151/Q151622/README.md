---
layout: page
title: "Q151622: IIS Sends Image Map File Instead of Processing the Script"
permalink: /kb/151/Q151622/
---

## Q151622: IIS Sends Image Map File Instead of Processing the Script

{% raw %}

	Article: Q151622
	Product(s): Internet Information Server
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 07-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 1.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you click a server-side image map, the browser downloads the image map file
	instead of taking you to a link defined in the image map. Depending on which
	browser you are using, it may display the map file or prompt you to save it to
	disk.
	
	CAUSE
	=====
	
	Given the following image map:
	
	  rect (0,1) (170,53) http://server/file1.htm
	  rect (264,26) (349,53) http://server/file2.htm
	  rect (187,23) (264,53) http://server/file3.htm
	
	If you click an area not defined by the coordinates the DEFAULT case should be
	returned by the server. In this case, no DEFAULT case is defined. Internet
	Information Server (IIS) sends the contents of the map file to the browser
	client with the following header:
	
	  Content-type: application/octet-stream
	
	Depending on how you have the MIME type mapped in your browser, you will receive
	different results. Some clients may give you an error about "unhandled file
	type" while others will display the content as plain text.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Internet Information
	Server version 1.0. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbiisSearch kbiis100
	Version           : 1.0
	
	=============================================================================
	

{% endraw %}
