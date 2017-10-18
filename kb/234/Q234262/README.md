---
layout: page
title: "Q234262: SMS: Linking Query to a Collection Membership Rule May Not Work"
permalink: kb/234/Q234262/
---

## Q234262: SMS: Linking Query to a Collection Membership Rule May Not Work

	Article: Q234262
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbQuery kbsms200sp2fix
	Last Modified: 25-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Systems Management Server (SMS) 2.0 query used as a Collection Membership rule
	may return invalid results for that collection, or may disappear altogether from
	the collection's Membership Rules window.
	
	CAUSE
	=====
	
	This behavior can occur if the query string contains a carriage return/line feed
	(CR/LF) character. This results in the query being removed from the collection
	rules when it is evaluated by SMS.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	WORKAROUND
	==========
	
	To work around this behavior, you can type the query string directly into the
	Query Statement window with no CR/LF character. For readability, you can format
	the query using CTRL+ENTER to move to the next line. Regular CR/LF characters
	are not permitted.
	
	When you are using copy and paste functions to move existing query statements
	from an external source into the Query Language window, make sure that the query
	is on a single line when you copy it. When you paste it into the Query Language
	window, it is formatted to fit within the window.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem was first corrected in Systems Management Server
	version 2.0 Service Pack 2.
	
	MORE INFORMATION
	================
	
	To verify that a query is free of CR/LF characters:
	
	1. Open the query string in Notepad or past it into Notepad.
	
	2. On the Edit menu, make sure that the Word Wrap command is not selected (there
	  should be no check mark).
	
	3. Format the query so that it appears in its entirety on the first line of the
	  Notepad document.
	
	4. Select the entire query statement.
	
	5. On the Edit menu, click Copy.
	
	6. In the SMS Administrator console, create new Query properties from the
	  Queries node.
	
	7. Right-click the Queries node, point to New, and then click Query.
	
	8. In the Name box, type the appropriate query name.
	
	9. On the General tab, click Edit Query Statement.
	
	10. In the Query Statement properties, click Show Query Language.
	
	11. Delete any existing text in the Query Statement window.
	
	12. Right-click in the Query Statement window, and then click Paste.
	
	13. Click OK.
	
	14. Click OK.
	
	After you follow these steps, you can add the query to the collection as a
	Collection Membership rule
	
	Additional query words: prodsms newline newlines
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbQuery kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
