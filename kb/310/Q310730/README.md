---
layout: page
title: "Q310730: Err Msg: Zone Support Files Could Not Be Downloaded or Installed"
permalink: /kb/310/Q310730/
---

## Q310730: Err Msg: Zone Support Files Could Not Be Downloaded or Installed

{% raw %}

	Article: Q310730
	Product(s): Microsoft Home Games
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbimu
	Last Modified: 30-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Zone.com 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to download the core Microsoft Zone files, the picture of the
	spade may not be displayed as expected, and then you receive the following error
	message:
	
	  Zone Support files could not be downloaded or installed.
	
	CAUSE
	=====
	
	This behavior can occur if older versions of the Heartbeat ActiveX Control are
	still installed on the system.
	
	RESOLUTION
	==========
	
	To resolve this issue, manually remove the Heartbeat ActiveX Control, and then
	browse to the following Zone site to download and install the Zone files again:
	
	  http://zone.msn.com/services/install.asp
	
	For additional information about removing the Heartbeat ActiveX Control, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q225041 Zone: How to Remove the Heartbeat ActiveX Control
	
	Additional query words: msgame
	
	======================================================================
	Keywords          : kberrmsg kbimu 
	Technology        : kbGamesSearch kbMSNSearch kbZone
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
