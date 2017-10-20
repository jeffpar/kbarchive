---
layout: page
title: "Q145971: XCLN: Upgrading From SFS Mail to Exchange Causes E-Forms"
permalink: /kb/145/Q145971/
---

## Q145971: XCLN: Upgrading From SFS Mail to Exchange Causes E-Forms

{% raw %}

	Article: Q145971
	Product(s): Microsoft Exchange
	Version(s): 4.0 5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 15-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After upgrading to Microsoft Exchange, Electronic Forms Designer 1.0 based forms
	may no longer work correctly if run from previous versions of Microsoft Mail.
	
	CAUSE
	=====
	
	This is by design. The files needed to launch the old e-forms have been changed
	and migrated to the new format for Microsoft Exchange. These e-forms will work
	correctly if used from within the Microsoft Exchange client.
	
	When you start previous mail programs (MS Mail versions 3.x), to send a message
	or retrieve a note, some functions, such as those needed by the e-forms
	designer, will no longer work correctly. This is because the old MAPI.DLL has
	been replaced by a newer version and, depending on the client, MAILSPL.EXE has
	been renamed and is no longer used.
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : 4.0 5.0
	
	=============================================================================
	

{% endraw %}
