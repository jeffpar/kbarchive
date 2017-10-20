---
layout: page
title: "Q134204: PC Win: How to Export a Personal Address Book to a New MMF"
permalink: /kb/134/Q134204/
---

## Q134204: PC Win: How to Export a Personal Address Book to a New MMF

{% raw %}

	Article: Q134204
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use version 3.2 of Microsoft Mail for Windows, there are times when it
	may be necessary or desirable to create a new mail message file (MMF). The
	following information includes steps for preserving the Personal Address Book
	(PAB) part of the MMF.
	
	MORE INFORMATION
	================
	
	To create a new MMF and preserve the current PAB, use the following steps:
	
	1. Start Mail using the MMF that contains the PAB you want to export. If the MMF
	  is on the server, move it locally (from the Mail menu, choose Options. Then
	  select Server).
	
	2. Create an empty folder. For this example, it will be called "EMPTY1" (without
	  the quotation marks).
	
	3. From the File menu, choose Export. Create an export folder. For this example
	  it will be called "EXPORT1.MMF" (without the quotation marks).
	
	4. Copy the empty folder (EMPTY1) to EXPORT1.MMF.
	
	5. Exit and sign out of Mail.
	
	6. Rename the current MMF, and Exit and Sign-out of Mail. Then restart Mail to
	  create a new MMF.
	
	7. Double-click the EXPORT1.MMF file to start Mail.
	
	8. Mail will prompt you to make this MMF your primary message. DO NOT MAKE THIS
	  MMF YOUR PRIMARY MESSAGE FILE.
	
	9. From the File menu, choose Export. Select the new MMF you created in step 6.
	
	10. Copy EMPTY1.
	
	11. Exit and Sign out of Mail.
	
	12. Restart Mail. The PAB will now be in the MMF.
	
	Additional query words: 3.20 keeping
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail320
	Version           : WINDOWS:3.2
	
	=============================================================================
	

{% endraw %}
