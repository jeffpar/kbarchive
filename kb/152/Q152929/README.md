---
layout: page
title: "Q152929: XCLN: WordPad and Exchange Crash When Run on Non-English NT 3.51"
permalink: /kb/152/Q152929/
---

## Q152929: XCLN: WordPad and Exchange Crash When Run on Non-English NT 3.51

	Article: Q152929
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 29-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows NT client, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	WordPad might crash and you might not be able to set up a profile for the
	Microsoft Exchange Windows NT client if you have just upgraded a non- English
	version of Windows NT from 3.51 to 4.0.
	
	CAUSE
	=====
	
	The Richedit control is used in both WordPad and the Microsoft Exchange client.
	It reads the font substitution information from the registry. The font
	substitution information can be in two forms. Windows NT 3.51 used a simplified
	form (since it didn't support multiple code pages), Arial CE=Arial. Windows NT
	4.0 (like Windows 95) has the character set numbers included in the font
	substitutions, Arial CE,238=Arial,238
	
	In the past (Windows NT 3.51 and Windows 95), we had either form 1 or form 2, but
	not both. When Windows NT 3.51 is updated to 4.0, it preserves the old settings
	and adds the new ones, thus both forms of substitution strings are now present.
	The RichEdit control was not designed to handle both forms at the same time.
	
	WORKAROUND
	==========
	
	Since the bugs happens due to the old (Windows NT 3.51) font substitution
	strings, removing these strings from the registry eliminates the cause of the
	bug. To remove these strings, follow these steps:
	
	1. Start Regedt32.exe.
	
	2. Go to
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT
	                    \CurrentVersion\FontSubstitutes
	
	3. Remove all 'type 1' font substitutions that deal with CE, Cyr, and Greek
	  fonts and do not have charset numbers.
	
	  For example, remove:
	
	     Arial Greek:Arial
	
	  but leave:
	
	     Arial Greek,161:Arial,161
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft Exchange clients,
	version 4.0, listed at the beginning of this article. This problem was corrected
	in Microsoft Exchange Server 4.0 U.S. Service Pack 4. For information on
	obtaining the service pack, query on the following word in the Microsoft
	Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT
	Version           : WINDOWS:4.0
	
	=============================================================================
	
