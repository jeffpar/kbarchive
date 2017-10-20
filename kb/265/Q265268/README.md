---
layout: page
title: "Q265268: PRB: MSDN Library Unable to Find Migrated Favorites"
permalink: /kb/265/Q265268/
---

## Q265268: PRB: MSDN Library Unable to Find Migrated Favorites

{% raw %}

	Article: Q265268
	Product(s): Microsoft Developer Network
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbHTMLHelp kbMSDN kbDSupport kbGrpDSTools
	Last Modified: 08-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Developer Network (MSDN) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you have used the MSDN Library Favorites Utility, you try to use some of
	the favorites that you copied, but an error message appears that is similar to
	the following:
	
	  Microsoft Internet Explorer:
	
	  Internet Explorer cannot open the Internet site mk:@MSITStore:C:\Program
	  Files\Microsoft Visual Studio\MSDN\2000JUL\1033\dsmsdn.chm::/html/dges.htm.
	
	  %1 could not be found.
	
	CAUSE
	=====
	
	The MSDN Library favorites are stored as URLs to information inside of HTML Help
	files (.chm files). Each topic in the MSDN Library has a specific .chm file,
	path, and HTML file name associated with it. The problem described in the
	"Symptoms" section can happen when the URL for a topic has changed between MSDN
	Library versions.
	
	RESOLUTION
	==========
	
	To resolve the problem, search the target MSDN Library for the new location of
	the desired topic. Add this topic to the favorites, and delete the incorrect
	favorites item.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The MSDN Library Favorites Utility, MSDNfav.exe, was first included with the
	July 2000 MSDN Library. Its purpose is to simplify the process of transferring
	favorites between MSDN Library installations.
	
	When the Favorites Utility copies favorites from one library to a new library,
	the new library typically has the same internal structure. This allows the URL
	in the favorite to work the same on both libraries. When the URL for a topic has
	changed for some reason, the Favorites Utility has no way to know the new URL
	for the topic. If the utility refused to migrate these favorites, the result
	would be "disappearing" favorites. Instead, the Favorites Utility migrates all
	of the favorites, including those that are invalid. This allows you to identify
	which favorites are no longer valid in the new library so that you can decide to
	correct or remove these favorites.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbHTMLHelp kbMSDN kbDSupport kbGrpDSTools 
	Technology        : kbMSDNSearch kbZNotKeyword2
	Version           : WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
