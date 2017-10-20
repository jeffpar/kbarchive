---
layout: page
title: "Q162823: ACC97: SourceSafe Integration Alerts Do Not Use Office Assistant"
permalink: /kb/162/Q162823/
---

## Q162823: ACC97: SourceSafe Integration Alerts Do Not Use Office Assistant

{% raw %}

	Article: Q162823
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:4.0,4.0a,5.0,97
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access 97 
	- Microsoft Visual SourceSafe for Windows, versions 4.0, 4.0a, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Advanced: Requires expert coding, interoperability, and multi-user skills.
	
	This article assumes that you are familiar with using the client side
	capabilities of Microsoft Visual SourceSafe. For more information about Visual
	SourceSafe, please refer to the "Visual SourceSafe User's Guide" or the Help
	topics available from the Visual SourceSafe menu.
	
	Microsoft Access and Visual SourceSafe Integration do not use the Office
	Assistant character when alerting you of errors or information.
	
	CAUSE
	=====
	
	Visual SourceSafe is not a component of Microsoft Office and because of the
	large number of other Microsoft products and development environments that
	Visual SourceSafe integrates with, it retains its own internal specifications
	for messages and alerts.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	There are error messages that you may receive while using Visual SourceSafe that
	do use the Office Assistant character; however, these messages may be generated
	by Microsoft Access 97 or the Microsoft Jet 3.5 database engine, rather than by
	Visual SourceSafe.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbSSafeSearch kbAudDeveloper kbAccessSearch kbAccess97 kbAccess97Search kbSSafe400 kbSSafe400a kbSSafe500
	Version           : WINDOWS:4.0,4.0a,5.0,97
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
