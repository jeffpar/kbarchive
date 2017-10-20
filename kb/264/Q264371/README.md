---
layout: page
title: "Q264371: Viacompact Tool Deletes X500.db File Unexpectedly"
permalink: /kb/264/Q264371/
---

## Q264371: Viacompact Tool Deletes X500.db File Unexpectedly

{% raw %}

	Article: Q264371
	Product(s): Microsoft Windows NT
	Version(s): 2.1
	Operating System(s): 
	Keyword(s): kberrmsg metadirectory Zoomit MMS
	Last Modified: 17-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Metadirectory Services, version 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Viacompact without the -unattended command-line option and the
	"Restart server when done" check box is selected in the Advanced Options dialog
	box, Viacompact does not release its locks on all database files until you
	respond to a final dialog box (the final dialog box informs you that the
	compaction is finished and prompts you to click OK).
	
	If you start a second instance of Viacompact using the -unattended and -start
	command-line options, Viacompact attempts to rename the X500.db file to X500.sav
	and the following error message is displayed in the log and on the console:
	
	  Failed to delete (.........)\hashwild.db; error 13 (Permission denied)
	
	CAUSE
	=====
	
	This behavior occurs because the first instance of Viacompact is not completely
	finished. The X500.save file already exists and the rename operation is
	unsuccessful. The subsequent deletion of the X500.db file (part of the normal
	Viacompact process) results in the database losing its (fundamental) ASN.1
	database, which effectively wipes out the entire directory.
	
	RESOLUTION
	==========
	
	To avoid this situation, ensure that all previous instances of Viacompact are
	completely finished before you start a new instance.
	
	
	Additional query words: via fail fails
	
	======================================================================
	Keywords          : kberrmsg metadirectory Zoomit MMS 
	Technology        : kbMMSSearch kbMMS210
	Version           : :2.1
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
