---
layout: page
title: "Q255932: TAMA: Incomplete Words Appear in the Operator's Log"
permalink: /kb/255/Q255932/
---

## Q255932: TAMA: Incomplete Words Appear in the Operator's Log

{% raw %}

	Article: Q255932
	Product(s): Microsoft Windows NT
	Version(s): 2.1
	Operating System(s): 
	Keyword(s): kbenv kbtool
	Last Modified: 03-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Metadirectory Services, version 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the Together Administration management agent (TAMA) has more than one
	resource, the operator's log may contain scrambled lines in the Summary section.
	For example:
	
	  Summary for [ma=NT,DsaName=Server,ou=Applications,dc=Focus,dc=com]
	  Number of entries processed: 4
	  Number of record(s) excluded: 1
	
	  Number of
	  Summary for [ma=NT,DsaName=Server,ou=Applications,dc=Focus,dc=com]
	  Number of entries processed: 4
	  Number of recoStarted MA script for
	  [ma=NDS,DsaName=Server,ou=Applications,dc=Focus,dc=com]
	
	  Summary for [ma=NDS,DsaName=Server,ou=Applications,dc=Focus,dc=com]
	  Number of entries processed: 4
	  Number of record(s) excluded: 1
	
	  Number o
	  Summary for [ma=NDS,DsaName=Server,ou=Applications,dc=Focus,dc=com]
	  Number of entries processed: 4
	  Number of reco
	  Process exited successfully Fri Jan 21 10:13:11 2000
	  fied: 3
	
	  Number of connector(s) added: 3
	
	  Number of modification(s) exported: 3
	
	CAUSE
	=====
	
	This problem occurs with Importt.exe when more than one resource is defined for
	the TAMA.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	Additional query words: Zoomit Via MA zscript genlogs
	
	======================================================================
	Keywords          : kbenv kbtool 
	Technology        : kbMMSSearch kbMMS210
	Version           : :2.1
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
