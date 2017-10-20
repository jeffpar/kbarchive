---
layout: page
title: "Q238887: XCLN: &quot;Invitations have not been sent for this meeting&quot; Message"
permalink: /kb/238/Q238887/
---

## Q238887: XCLN: &quot;Invitations have not been sent for this meeting&quot; Message

{% raw %}

	Article: Q238887
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:2000,97,98
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 2000 
	- Microsoft Outlook 97 
	- Microsoft Outlook 98 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the Outlook Calendar, when you open a meeting or an invited event that you
	created, you may see the message
	
	  Invitations have not been sent for this meeting.
	
	even though you have sent the meeting request and may have received responses
	from the attendees.
	
	When you close the meeting or invited event, you may receive the message:
	
	  <Subject of the meeting> has not been sent. Would you like to send it?
	
	CAUSE
	=====
	
	This happens when a Calendar folder has been exported to a .pst file. When
	exporting an Outlook Calendar to a .pst file, meeting request status and
	attendee response status are not exported. As a result, when the meeting or
	invited event is opened in the pst file, or after the calendar has been
	re-imported, the Info bar will display the message described in the "Symptoms"
	section.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Although the displayed message gives the impression that the meeting request has
	not been sent, there is no need to send it again. When you receive the message
	described in the "Symptoms" section, click No. The attendees who received the
	meeting request when it was originally sent will not be affected.
	
	Clicking Yes, to send the message will generate another instance of the meeting
	or event request and will result in duplicates and conflicts for the attendees.
	
	
	Additional query words: invitation has not been sent, calendar, meeting request,
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOutlook2000Search kbOutlook97Search kbOutlook98Search kbZNotKeyword3
	Version           : WINDOWS:2000,97,98
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
