---
layout: page
title: "Q265148: XCCC: Conversation Box Is Missing from a Meeting Request in OWA"
permalink: kb/265/Q265148/
---

## Q265148: XCCC: Conversation Box Is Missing from a Meeting Request in OWA

	Article: Q265148
	Product(s): Microsoft Exchange
	Version(s): 5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Operating System(s): 
	Keyword(s): kbFAQ exc55 exc55sp1 exc55sp2 exc55sp3
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Outlook Web Access (OWA) to send a meeting request, the
	Conversation box is missing. However, if you use Microsoft Outlook, the
	Conversation box is available.
	
	When you send a meeting request that does not include the Conversation box, the
	following behavior occurs:
	
	- When an attendee replies to the request, the Conversation box remains blank,
	  and all similar e-mail messages are grouped in one section.
	
	- If the meeting request is sent to a Lotus Notes user, the Subject box is not
	  displayed because Notes uses the Conversation box as the Subject box in a
	  meeting request form.
	
	CAUSE
	=====
	
	This behavior occurs because the OWA code does not generate the Conversation box
	in a meeting request.
	
	WORKAROUND
	==========
	
	To work around this issue, change the OWA code by using the following steps.
	
	NOTE: Do not change any OWA code unless you fully understand the OWA structure
	and have confirmed that the issue is severely affecting your business.
	
	1. Stop the World Wide Web Publishing service.
	
	2. Copy the Commands.asp folder that is located in the following folder:
	
	  Exchsrvr\Webdata\<Language_version>\Forms\Ipm\Schedule\Meeting\Request
	
	  NOTE: Because there are many Commands.asp files on your hard disk, make sure
	  that you copy the Commands.asp file that is located in this folder. Also,
	  make sure that you open the <Language_version> folder of the language
	  you are using, for example, USA or CHS.
	
	3. Paste the Commands.asp file to a safe location so that you can recover it
	  when necessary.
	
	4. Open Commands.asp with any text editor, and then locate the BindData
	  function.
	
	5. In the BindData function, add the following lines under the "IF bstrTab =
	  "message" THEN" section:
	
	  Sub BindData()
	
	  ...
	      IF bstrTab = "message" THEN
	      
	          ...'Add start here
	          If objNewMsg.ConversationIndex = "" then      
	                
	             objNewMsg.ConversationIndex = 
	             objOMSession.CreateConversationIndex
	                objNewMsg.ConversationTopic = Request.Form("subject")
	
	          End If
	          ' Add end here
	          ...
	
	      Endif
	          ...
	
	  End Sub
	
	6. Restart the World Wide Web Publishing service.
	
	7. Create a new meeting request from OWA.
	
	Additional query words: ConversationTopic
	
	======================================================================
	Keywords          : kbFAQ exc55 exc55sp1 exc55sp2 exc55sp3 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3
	Version           : :5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Issue type        : kbprb
	
	=============================================================================
	
