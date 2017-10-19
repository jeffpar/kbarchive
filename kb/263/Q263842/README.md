---
layout: page
title: "Q263842: XADM: Viewing Messages in the MSExchangeIS Private Send Queue"
permalink: /kb/263/Q263842/
---

## Q263842: XADM: Viewing Messages in the MSExchangeIS Private Send Queue

	Article: Q263842
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 20-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you view the Send Queue Size counter for the MSExchangeIS Private object in
	Performance Monitor, the Send Queue Size counter may have a value that is
	consistently greater than 0. The Send Queue Size counter is the number of
	messages that have been sent with the Deferred Delivery or Deferred Submission
	property enabled.
	
	This article provides steps to identify these messages and determine the Deferred
	Delivery or Deferred Submission properties that are set on the individual
	messages.
	
	MORE INFORMATION
	================
	
	To identify the messages that have the Deferred Delivery or Deferred Submission
	property enabled and to determine the properties that are set on the individual
	messages:
	
	1. Use Performance Monitor to determine the value for the Send Queue Size
	  counter of the MSExchangeIS Private object.
	
	2. Configure and run the Exmerge utility by using the following settings:
	
	  a. Click "Two step merge", and then click Next.
	
	  b. Click "Step 1: Copy data to personal folders", and then click Next.
	
	  c. Type the name of the Exchange Server computer, and then click Options.
	
	  d. Click the Data tab, and then make sure that the "User messages and
	     folders" check box is selected.
	
	  e. Click the Folders tab, click "Process only these folders", and then click
	     Modify.
	
	  f. In the "Available folders" pane, click "\Outbox", and then click Add.
	
	  g. Click "Apply action to sub folders of the selected folders", and then
	     click OK.
	
	  h. Click Next to proceed to the list of mailboxes.
	
	  i. After all of the mailboxes are displayed for this server, click Select
	     All, and then click Next.
	
	  j. Verify the location of the Exmergedata folder, and then click Next.
	
	  k. This starts the Exmerge process; when you are done, click Finish.
	
	3. From a command prompt, navigate to the Exmergedata folder, and then type the
	  following command:
	
	  dir >logfile.txt
	
	4. Review the Logfile.txt file that the command creates, and note the names of
	  all the *.pst files that have a size greater than 32,768 bytes.
	
	5. From Outlook, add the *.pst files that you noted in step 4 to your current
	  profile by adding a new Personal Folders service for each *.pst file.
	
	6. Open the Outbox in each of the personal folders that you added and view the
	  messages that the Outbox contains. At this point, you can determine the exact
	  options that are configured for the messages.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbhowto
	
	=============================================================================
	
