---
layout: page
title: "Q261207: XCLN: Information about the Large Message Rule in Outlook 2000"
permalink: /kb/261/Q261207/
---

## Q261207: XCLN: Information about the Large Message Rule in Outlook 2000

{% raw %}

	Article: Q261207
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:9.0; :
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 2000, version 9.0, used with:
	   - the operating system: Microsoft Windows NT 
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows 95 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article provides information about the Large Message rule in Outlook.
	
	MORE INFORMATION
	================
	
	In versions of Outlook earlier than Outlook 2000, the use of Offline Folder
	(.ost) files is a benefit to mobile users. As a mobile user, you can create .ost
	files, and then synchronize your .ost files with server-based mailboxes.
	However, this function is limited because you can only synchronize your entire
	mailbox or synchronize each folder individually. Also, the default folders under
	the mailbox (Calendar, Contacts, Deleted Items, Drafts, Inbox, Journal, Notes,
	Outbox, Sent Items, and Tasks ) are configured to be synchronized when you are
	either offline or online. Because of this, the folders are available when you
	works offline. For clients that connect by using a dial-up modem, this
	synchronization process can be very slow, especially if there are large
	messages, or messages with large attachments, in the mailbox folders.
	
	One of the usability enhancements in Outlook 2000 allows you to configure a
	filter for more rapid synchronization. This filter is implemented in the form of
	a rule, the Large Message rule. The Large Message rule checks if the incoming
	message is larger than 50 kilobytes (KB), the default size which can be changed,
	and, if the message is larger them 50 KB, it moves the message to the Large
	Messages sub-folder under the Inbox. Because of this, it is a server-side rule.
	When you are online (connected to the Exchange Server computer) and receive a
	message that is larger than 50 KB from another user, the Large Message rule
	works. You sees the "New Messages of Interest" dialog box with the following
	message:
	
	  These messages have been moved to the Large Messages folder. To view the
	  messages, go online or synchronize the Large Messages folder.
	
	The dialog box also contains a list of messages that are larger than 50 KB. You
	can only see the From box and the Subject box in the "Messages of Interest"
	dialog box.
	
	If the you are working off-line, and you have received a message that is than 50
	KB during that period, the server-side Large Message rule automatically moves
	that message to the Large Messages sub-folder under the Inbox folder of the
	user's mailbox. When you click Synchronies on the Tools menu, and then click
	"All folders" to synchronize, Outlook connects to the Exchange Server computer
	and then synchronizes all of the folders. You also receive the "New Messages of
	Interest" dialog box. When you try to open one of the messages that are
	displayed, you receive the following error message:
	
	  This message is not available. It may be in a folder that is not available
	  offline.
	
	This feature can be enabled or disabled when you are connected to the Exchange
	Server computer. To enable this feature:
	
	1. On the Tools menu, click Synchronize, and then click Offline Folder Settings.
	
	2. On the All Folders tab, click Download Options.
	
	3. Verify that the "Don't download messages larger than" check box is selected,
	  click OK, and then click OK.
	
	The default message size for this filter is 50 KB. You can modify this setting.
	After you click to select the "Don't download messages larger than" check box,
	the Exceptions section is available and you can add additional criteria for
	message filtering. You do not have to modify the rule. If you have modified the
	rule by adding criteria to the Exceptions section, and then you decide that you
	want to revert to the default rule, you can click Restore Default Rule.
	
	After you enable this rule, you can see the rule listed in the Rules Wizard as
	"Large Message Rule (client-only)." You can enable or disable the rule, move it
	up and down, delete it, or rename it from the Rules Wizard interface in the same
	way that you would do this for other rules. If you rename this rule, and then
	click Restore Default Rule, the rule is recreated as "Large Message Rule
	(client-only)."
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOutlook2000Search kbZNotKeyword3
	Version           : WINDOWS:9.0; :
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
