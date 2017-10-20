---
layout: page
title: "Q169915: XFOR: How to Publish Exchange Public Folders as NNTP"
permalink: /kb/169/Q169915/
---

## Q169915: XFOR: How to Publish Exchange Public Folders as NNTP

{% raw %}

	Article: Q169915
	Product(s): Microsoft Exchange
	Version(s): 5.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to publish an existing Exchange Server public folder
	as a newsgroup. This allows people using Network News Transfer Protocol (NNTP)
	newsreaders to participate in Exchange public folder discussions.
	
	MORE INFORMATION
	================
	
	The key to understanding how Exchange Server supports newsgroups is the
	newsgroup hierarchy anchor. A newsgroup hierarchy anchor is used to designate
	the top folder in a new newsgroup hierarchy. This is demonstrated in the
	following example:
	
	You have seven public folders in your public folder hierarchy. Indentations
	represent the relationship between parent folders and sub-folders:
	
	  All Public Folders
	     Outlook
	        Development
	     Usage
	        MAPI Service Providers
	     Exchange
	        Internet Protocols
	        Connectors
	
	You decide to publish the Outlook, Development, Usage, and MAPI Service Providers
	folders as newsgroups. To do this, you must create a new newsgroup hierarchy
	anchor:
	
	1. In the Exchange Administrator program, on the Tools menu, select Newsgroup
	  Hierarchies.
	
	2. In the Newsgroup Hierarchies dialog box, select Add.
	
	3. Select the public folder you want to designate as the new newsgroup hierarchy
	  anchor. In this example, it is the Outlook folder.
	
	4. Click OK.
	
	5. Repeat steps 1-4 for the anchor folder Usage.
	
	  The subfolders of Outlook and Usage are automatically published as newsgroups
	  when you designate the parent folders Outlook and Usage as the anchors.
	  Newsgroup readers now have access to four new newsgroups: outlook,
	  outlook.development, usage, and usage.mapi-service-providers.
	
	  Notice that the spaces in the name MAPI Service Providers were replaced with
	  dashes (-). This happened because spaces are not allowed in newsgroup names.
	  Most other illegal characters in newsgroup names are automatically discarded
	  or changed. It is better to carefully select the folder names and avoid
	  unusual characters and spaces as much as possible.
	
	6. After you have designated your anchors, you must change permissions for the
	  published folders. You can do this with either the Exchange 5.0 Administrator
	  program or the Exchange/Outlook clients. New features in the Administrator
	  program make it easier to grant permissions from the Administrator rather
	  than from the client.
	
	  Often, you want to just allow anonymous access to the newly published folders.
	  The following example shows you how to grant anonymous access to the newly
	  published folders through the Administrator program:
	
	  1. In the Exchange Administrator program, select Public Folders.
	
	  2. Select the top-level public folder.
	
	  3. On the File menu, select Properties.
	
	  4. On the General property page, select Client Permissions.
	
	  5. Assign the role desired to the anonymous user. By default, the role of
	     Anonymous is None.
	
	  6. Click OK.
	
	  7. Select the Propagate These Changes to All Sub-folders check box.
	
	  8. Click Apply.
	
	  9. On the Sub-folder Properties dialog box, the Client Permissions check box
	     should already be selected, but be sure it is selected.
	
	  10. Click OK until you fully exit all dialog boxes.
	
	Additional query words: NNTP Public folders
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : 5.00
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
