---
layout: page
title: "Q174298: XADM: Customizing the Moderator Address in Moderated Newsgroup"
permalink: kb/174/Q174298/
---

## Q174298: XADM: Customizing the Moderator Address in Moderated Newsgroup

	Article: Q174298
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the procedure to customize or change the moderator for a
	newsgroup in Exchange Server.
	
	MORE INFORMATION
	================
	
	When a moderated newsgroup public folder is created, the default moderator
	address is determined by rules specified in the Moderatr.txt file, located in
	the Exchsrvr\Add-ins\Ins folder. You can customize the default moderator address
	by editing the rules in this file by using a text editor such as Notepad.
	
	Each entry in the Moderatr.txt file is the Simple Network Management Protocol
	(SMTP) address of the newsgroup moderator in the format of newsgroup:address,
	where the newsgroup is a newsgroup name or a wildcard pattern that matches
	multiple names. The rules are processed from top to bottom, and the first match
	that is found is used.
	
	The special value "%s" in the address causes all dots in the newsgroup name to be
	replaced with dashes. For example, the default rule in the moderator file is
	*:%s@uunet.uu.net. The asterisk (*) matches all newsgroup names, and the %s
	substitutes the newsgroup name in the address. If a moderated newsgroup called
	news.day is created, the default moderator address is news-day@uunet.uu.net.
	
	After a newsgroup public folder has been created, the public folder owner can
	change the moderator address with the Microsoft Exchange Client or Microsoft
	Outlook by editing the moderator rule in the folder properties.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbinfo
	
	=============================================================================
	
