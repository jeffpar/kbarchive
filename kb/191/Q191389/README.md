---
layout: page
title: "Q191389: XCLN: How to Customize or Disable the Offer and Welcome Messages"
permalink: /kb/191/Q191389/
---

## Q191389: XCLN: How to Customize or Disable the Offer and Welcome Messages

{% raw %}

	Article: Q191389
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 98 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The generic Office 97 Offer and Welcome messages generated during first run of
	Outlook 98 may not be desirable in their original form. This article describes
	how to either disable these messages from being generated or modify the default
	message.
	
	MORE INFORMATION
	================
	
	To disable the Offer and Welcome messages, before the first run of Outlook 98,
	rename the Offer.msg and Welcome.msg files. These files are by default in the
	following location:
	
	  C:\Program Files\Microsoft Office\Office
	
	The Offer.msg and Welcome.msg files are in HTML format. You can edit these files
	with any editor capable of editing HTML, such as Microsoft Word or Outlook. In
	most cases, if you double-click on a file with the extension of .msg, it will
	open in Outlook. Our steps below assume that the file is opening up in Outlook.
	
	To customize the Offer.msg or Welcome.msg files, do the following:
	
	1. Locate and double-click the Offer.msg or Welcome.msg files in the folder
	  listed above, or wherever Microsoft Office is installed on the computer.
	
	2. On the Edit menu, click Edit Message.
	
	3. Make the changes to the file, and then on the File menu, click Save. This
	  will save the file in its current location with its current name.
	
	4. Close the file.
	
	A message can be created in any supported message format such as Rich Text Format
	(.rtf), and saved to Welcome.msg and Offer.msg file name.
	
	Additional query words: 98 change ODW ODK Admin suppress
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOutlook98Search kbZNotKeyword3
	Version           : WINDOWS:
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
