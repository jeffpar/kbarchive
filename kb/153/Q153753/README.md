---
layout: page
title: "Q153753: XCLN: Schedule+ 1.0 and 7.0 Interoperability in MS Mail"
permalink: /kb/153/Q153753/
---

## Q153753: XCLN: Schedule+ 1.0 and 7.0 Interoperability in MS Mail

{% raw %}

	Article: Q153753
	Product(s): Microsoft Schedule+ for Windows
	Version(s): 7.0
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 15-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+, version 7.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In a pure MS Mail Postoffice environment, Schedule+ 1.0 and Schedule+ 7.0 have
	several interoperability issues. The information provided here assumes that you
	have brand new Schedule+ 7.0 users, or that you migrated from Schedule+ 1.0 and
	cleaned up the original Schedule+ 1.0 calendar files. If you are not sure that
	the original files were cleaned up, run the Adminsch program and choose
	Administration-Clean Up Schedule Files after the migration.
	
	MORE INFORMATION
	================
	
	On a Single PO:
	
	- Free/Busy Information:
	
	  From a Schedule+ 1.0 user looking at a Schedule+ 7.0 user:
	
	  CAN:
	
	   - You can see free/busy information for a Schedule+ 7.0 user, but that is
	     all.
	
	  CANNOT:
	
	   - You can not see planner details.
	
	   - You can not open a Schedule+ 7.0 appointment book.
	
	  From a Schedule+ 7.0 user looking at a Schedule+ 1.0 user:
	
	  CAN:
	
	   - You can see free/busy information for a Schedule+ 1.0 user.
	
	   - You can do all messaging. But Schedule+ 1.0 does not accept recurring
	     meeting requests. Meeting Cancellations from Schedule+ 7.0 to Schedule+
	     1.0 will not provide the Remove from Schedule option. You will need to
	     manually delete the appointment. Also, if the Schedule+ 7.0 sender moves
	     the meeting, the Schedule+ 1.0 user will need to manually delete the old
	     meeting.
	
	   - You can open a Schedule+ 1.0 appointment book, depending on the
	     permissions given by the Schedule+ 1.0 user, but you can only create
	     appointments and meetings on the other person's appointment book. You
	     cannot create tasks, events, contacts or any recurring items (including
	     recurring appointments and meetings). You can modify recurring
	     appointments that the Schedule+ 1.0 user created on their appointment
	     book, but you can not create them for them.
	
	
	- Delegate/Manager:
	
	  Both the manager and the delegate need to be running the same version of
	  Schedule+.
	
	   - Resource: From a Schedule+ 1.0 user looking at a Schedule+ 7.0 resource:
	
	     CANNOT:
	      - Resources cannot autobook, but here is a workaround:
	
	        1. Resource is currently logged into Schedule+ 7.0.
	
	        2. The This Account is for a Resource option is checked.
	
	        3. The Auto Accept and Auto Decline options are checked.
	
	        4. Unless there is a conflicting meeting, in which case the mail will
	           just sit in the inbox until someone deals with it. Because of this
	           situation, we recommend that you assign a delegate to the resource,
	           so they can watch for conflicting appointments.
	
	     From a Schedule+ 7.0 user looking at a Schedule+ 1.0 resource:
	
	     CANNOT:
	
	      - Resources cannot autobook. For additional information, please see the
	        following article in the Microsoft Knowledge Base:
	
	  Q149213 How Resource Accounts Automatically Accept Meeting Requests
	
	For Multiple POs:
	
	- Free/Busy Information:
	
	  For free/busy information to be seen, you must either have dynamic connections
	  setup or run Schdist.exe. You can run dynamic connections and Schdist.exe at
	  the same time.
	
	  From a Schedule+ 1.0 user on one PO, to a Schedule+ 7.0 user on a second PO:
	
	  CAN:
	
	   - Send meeting requests
	
	   - View free/busy time if using Schdist. Dynamic Connections might not work
	     consistently and therefore, are not recommended.
	
	  CANNOT:
	
	   - View details of the Schedule+ 7.0 users' appointments from the Open
	     Other's Appointments command on the File menu or Planner.
	
	  From a Schedule+ 7.0 user on one PO, to a Schedule+ 1.0 user on a second PO:
	
	  CAN:
	
	   - Send meeting requests.
	
	   - View free/busy times.
	
	   - View details of the Schedule+ 1.0 user's calendar if dynamic connections
	     are used.
	
	- Delegate/Manager:
	
	  Both the manager and the delegate need to be running the same version of
	  Schedule+.
	
	   - Resource:
	
	     From a Schedule+ 1.0 user looking at a Schedule+ 7.0 resource:
	
	     CANNOT:
	
	      - Resources can not autobook, but here is a workaround:
	
	        1. Resource is currently logged into Schedule+ 7.0.
	
	        2. The This Account is for a Resource option is checked.
	
	        3. The Auto Accept and Auto Decline options are checked.
	
	        4. Unless there is a conflicting meeting, in which case the mail will
	           just sit in the inbox until someone deals with it. Because of this
	           situation, we recommend that you assign a delegate to the resource,
	           so they can watch for conflicting appointments.
	
	     From a Schedule+ 7.0 user looking at a Schedule+ 1.0 resource:
	
	     CANNOT:
	
	      - Resources cannot autobook. For additional information, please see the
	        following article in the Microsoft Knowledge Base:
	
	  Q149213 How Resource Accounts Automatically Accept Meeting Requests
	
	Additional query words: 4.00 interop
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbZNotKeyword2 kbScheduleSearch kbSchedule700
	Version           : :7.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
