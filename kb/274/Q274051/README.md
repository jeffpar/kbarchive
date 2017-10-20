---
layout: page
title: "Q274051: INFO: Anti-Virus Software May Impact VSS Performance"
permalink: /kb/274/Q274051/
---

## Q274051: INFO: Anti-Virus Software May Impact VSS Performance

{% raw %}

	Article: Q274051
	Product(s): Microsoft SourceSafe
	Version(s): 4.0,4.0a,5.0,6.0
	Operating System(s): 
	Keyword(s): kbSSafe400 kbSSafe500 kbSSafe600 _IK kbGrpDSSSafe
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 4.0, 4.0a, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	With the increased concerns over viruses spreading over the Internet and through
	e-mail, many anti-virus software companies have implemented a feature that scans
	every file every time that the file is opened. This feature can have a dramatic
	impact on Visual SourceSafe (VSS) performance. This feature is sometimes
	referred to as Auto-Protect or Auto-Scan.
	
	MORE INFORMATION
	================
	
	Because Visual SourceSafe is made up of many small file pairs, when you do a
	branch or other large scale Visual SourceSafe operation, the Auto-Scan feature
	can have a dramatic effect on performance. In one case, a branch performed on a
	VSS project with this feature enabled took eight hours; with the feature
	disabled, it took 20 minutes.
	
	This feature can have such a dramatic effect because the operations are happening
	across the network and are affected by network performance. At the same time,
	they are also affecting other users' network performance.
	
	Many of the anti-virus software companies allow you to configure what file types
	are scanned with these features.
	
	Microsoft Visual SourceSafe support recommends that you enable virus checking
	without the Auto-Scan option on the Visual SourceSafe server, and only do a full
	scan of the files on the SourceSafe server periodically.
	
	Additional query words: slow performance
	
	======================================================================
	Keywords          : kbSSafe400 kbSSafe500 kbSSafe600 _IK kbGrpDSSSafe 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe400 kbSSafe400a kbSSafe500
	Version           : :4.0,4.0a,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
