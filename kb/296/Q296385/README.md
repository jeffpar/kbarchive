---
layout: page
title: "Q296385: SMS: Delay When You Try to Delete Collections"
permalink: /kb/296/Q296385/
---

## Q296385: SMS: Delay When You Try to Delete Collections

	Article: Q296385
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms200preSP4fix
	Last Modified: 20-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you click "Yes, I want to see more information" and then delete a
	collection in the Systems Management Server (SMS) Administrator console, a delay
	may occur before the next dialog box that displays related subcollections is
	displayed.
	
	CAUSE
	=====
	
	This problem occurs because the SMS Administrator console enumerates all
	existing collections in the database to determine if any other collections have
	a link to the collection that you are deleting. As a result, there is a longer
	delay when there is a large number of collections.
	
	WORKAROUND
	==========
	
	To work around this problem, not click "Yes, I want to see more information",
	instead, click "No, I know I want to delete this collection". However, when you
	click "Yes, I want to see more information", you are not prompted about the
	subcollections, advertisements, queries, collection membership rules, and
	administrators that will be effected.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms200preSP4fix 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
