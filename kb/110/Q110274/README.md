---
layout: page
title: "Q110274: PC WSPlus: Summary List of Schedule+ 1.0 and 1.0a Bugs"
permalink: /kb/110/Q110274/
---

## Q110274: PC WSPlus: Summary List of Schedule+ 1.0 and 1.0a Bugs

{% raw %}

	Article: Q110274
	Product(s): Microsoft Schedule+ for Windows
	Version(s): 1.0,1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	
	The following is a list of bugs confirmed in versions 1.00 and 1.00a of
	Microsoft Schedule+ for Windows. This is not a comprehensive list; this
	list is current as of January 1, 1994.
	
	For more information on the bug listed (for example, its cause, a
	resolution, or a fix), query in the Microsoft Knowledge Base on the
	article ID.
	
	BUG LISTING FOR VERSIONS 1.0 AND 1.0A
	-------------------------------------
	
	- Friendly Name Does Not Change When Updated
	
	- Margins Off When Printing on HP LaserJet III
	
	- Header Information Is Displayed in Message Body
	
	- Auto-Pick Picks 1-Hour Slot for Appointment
	
	- Moving Appointments Off Line Gives Error Message
	
	- Importing Long Appointments Hides Buttons
	
	- Importing Calendar File Overwrites Notes
	
	- Cannot Switch to Task List
	
	- No Error Message When Printers Removed
	
	- Cannot Choose All When Exporting to a Text File
	
	- Err Msg: Not Enough Memory to Display Dialog Box
	
	- Free/Busy Times Are Not Received
	
	- Schedule+ Prints Incomplete Message, Header Info
	
	- Date Bold When Viewing Other's Appointment Book
	
	- Alarms Pop-Up Dialog Box Is Not Pen Aware
	
	- Edit Gesture Does Not Work with Appointment Book
	
	- IBM Matrix Incorrectly Prints Right Border
	
	- Subject Field Incorrect for X.400 User
	
	- Wrong Message When Deleting Meeting
	
	- Archive Progress Indicator Starts at 50 Percent
	
	Friendly Name Does Not Change When Updated:
	
	Q86085
	
	Microsoft Schedule+ for Windows stores each user's postoffice alias and
	full name in the local and server calendar files. When the user's full name
	is modified on the postoffice with the Mail Administrator program, the full
	name is not updated in the Schedule+ calendar files.
	
	Margins Off When Printing on HP LaserJet III:
	
	Q86182
	
	Margins can be slightly off when you print from Microsoft Schedule+ for
	Windows to a Hewlett-Packard (HP) LaserJet III printer. The margins can be
	as much as 1/8th inch off, depending on the layout and views being printed.
	
	Header Information Is Displayed in Message Body:
	
	Q86378
	
	If a Microsoft Mail for PC Networks user is not using the Windows client,
	then the first meeting notice that user receives from Microsoft Schedule+
	for Windows will include the header information in the body of the message.
	The second and subsequent messages will not have this information in the
	body. No information is lost.
	
	Auto-Pick Picks 1-Hour Slot for Appointment:
	
	Q86379
	
	The Microsoft Schedule+ for Windows Auto-Pick command selects 1-hour
	appointments if the initial time ends with or continues through midnight.
	
	Moving Appointments Off Line Gives Error Message:
	
	Q86382
	
	In Microsoft Schedule+ for Windows, when you move or change a meeting while
	you run Schedule+ off line, the following error message will be displayed:
	
	  The attendees could not be notified. You may wish to undo this action and
	  make the change when you work on-line.
	
	When you choose Undo from the Edit menu (which is the correct action to
	take), the same message is displayed again. You should ignore the second
	error message.
	
	Importing Long Appointments Hides Buttons:
	
	Q86383
	
	Microsoft Schedule+ for Windows displays the following error message while
	importing appointments if there is a conflicting appointment:
	
	  This appointment will conflict with an existing appointment in your schedule.
	  Do you want to add it anyway?
	
	If the imported appointment has more text than can be displayed on one
	line, the window size of the alert will be too large for the screen. If
	this happens, the Yes and No buttons in the dialog box may be off the
	screen.
	
	Importing Calendar File Overwrites Notes:
	
	Q86384
	
	Microsoft Schedule+ for Windows can import Windows Calendar files; however,
	if the imported files contain notes, the imported notes will replace any
	existing notes.
	
	Cannot Switch to Task List:
	
	Q86603
	
	If a Microsoft Schedule+ for Windows Task list has more than 255 late,
	uncompleted tasks and you try to open the Task list or edit a recurring
	task in the Edit Recurring Tasks dialog box, the following error message
	will be displayed:
	
	  There is not enough memory available to perform this action. Please close
	  some windows and try again.
	
	No Error Message When Printers Removed:
	
	Q87990
	
	If you have used a printer with Microsoft Schedule+ for Windows, and then
	all of the printers installed for Windows are removed using Control Panel,
	further reports printed from Schedule+ show the progress indicator and
	behave as though the report printed properly. No error message stating that
	there are no printers available is generated.
	
	Cannot Choose All When Exporting to a Text File:
	
	Q98784
	
	When you attempt to export information from Microsoft Schedule+ for Windows
	to a text file, the All option button is not available. Similarly, when you
	attempt to export Schedule+ information in the Schedule+ file format, the
	only option available is All.
	
	Err Msg: Not Enough Memory to Display Dialog Box:
	
	Q99205
	
	Following a successful installation of Microsoft Schedule+ for Windows as a
	stand-alone user, if the USER_NAME.CAL file contains a space, the calendar
	file may work for a period of time, but an invalid calendar file is
	eventually generated (the calendar file becomes corrupt and/or is
	unrecognized by Schedule+.
	
	Free/Busy Times Are Not Received:
	
	Q100032
	
	When you run Schedule Distribution (SCHDIST.EXE) among several Microsoft
	Mail for PC Networks postoffices from version 1.0 of Microsoft Schedule+
	for Windows, the free and busy times from one or more postoffices will not
	transmit or be received by one or more postoffices.
	
	One or more postoffices participating in Schedule Distribution will never
	receive updates from other postoffices. For example, the following log file
	indicates that a message from RB/SMPO2 is generated; however, the line
	immediately following indicates a message received, but without a "From:"
	line.
	
	     [16:07:41] - <m:> RB/SMPO: Checking for schedule updates ...
	     [16:07:41] - Sending schedule update
	     [16:07:41] -          From: RB/SMPO
	     [16:07:41] -            To: RB/SMPO2
	     [16:07:41] -
	     [16:07:41] - <n:> RB/SMPO2: Checking for schedule updates ...
	     [16:07:42] - Sending schedule update
	     [16:07:42] -          From: RB/SMPO2
	     [16:07:42] -            To: RB/SMPO
	     [16:07:42] - Received schedule update
	     [16:07:42] -            To: RB/SMPO2
	     [16:07:42] -
	
	Schedule+ Prints Incomplete Message, Header Info:
	
	Q104030
	
	When you print a message in Microsoft Schedule+ for Windows, you get only
	the following information:
	
	- User name
	
	- From field
	
	- To field
	
	- Subject field
	
	- When field
	
	- Date Sent field
	
	The following information is not printed:
	
	- Who the message is for (that is, the manager or the assistant)
	
	- Type of message (that is, a response, cancellation, or request)
	
	- Attendance Status label (for responses only)
	
	- Messages marked as Sent On Behalf Of Manager
	
	Date Bold When Viewing Other's Appointment Book:
	
	Q104058
	
	With versions 1.0 and 1.0a of Microsoft Schedule+ for Windows, if a user
	has an appointment that is both private and tentative, the appointment date
	on the calendar is bold when you view the calendar by choosing Open Other's
	Appt. Book from the File menu.
	
	Alarms Pop-Up Dialog Box Is Not Pen Aware:
	
	Q104060
	
	When Microsoft Schedule+ for Windows needs to notify you of an event, it
	displays a Reminder pop-up dialog box. This dialog box asks whether you
	want to be reminded again. A field is available for entering a new reminder
	frequency. This field is not pen-aware (that is, it does not accept
	handwritten numeric inputs). Instead, the cursor remains an I-beam and pen
	input is disabled.
	
	Edit Gesture Does Not Work with Appointment Book:
	
	Q104061
	
	When you use version 1.0 or 1.0a of Microsoft Schedule+ for Windows with
	Microsoft Windows for Pen Computing, the edit gesture (a check mark)
	displays an empty edit box instead of the edited text when the gesture is
	made on a selected (highlighted) appointment inside the appointment book.
	
	IBM Matrix Incorrectly Prints Right Border:
	
	Q104062
	
	In versions 1.0 and 1.0a of Microsoft Schedule+ for Windows, when you print
	the standard-size view of a schedule or task list on an IBM Matrix printer,
	the right vertical border is sometimes misaligned and the text occasionally
	exceeds the right vertical border in the print output.
	
	Subject Field Incorrect for X.400 User:
	
	Q104129
	
	The Subject field of a Microsoft Schedule+ for Windows message destined for
	an X.400 loop-around user is not correct. An X.400 loop-around user is one
	where the message returns to the user through the X.400 gateway.
	
	Wrong Message When Deleting Meeting:
	
	Q104369
	
	In versions 1.0 and 1.0a of Microsoft Schedule+ for Windows, when you use
	another person's (user1) appointment book to create a meeting that includes
	yourself, you may receive an incorrect message when you delete the meeting
	while in user1's schedule.
	
	If you choose not to book the meeting into your own schedule, when you go
	back into user1's appointment book, delete the meeting, and choose to send
	a cancellation message, you will receive the following message:
	
	  Do you want to remove this meeting for yourself now?
	
	Since you did not book the meeting in your own schedule, you should not
	receive the message.
	
	Archive Progress Indicator Starts at 50 Percent:
	
	Q105433
	
	In versions 1.0 and 1.0a of Microsoft Schedule+ for Windows, when the
	allotted Schedule+ storage limit has expired, you are asked to do one of
	the following:
	
	- Create archive before deleting
	
	- Delete
	
	- Do Not Delete
	
	When you choose to archive this Schedule+ information, the Progress
	Indicator immediately begins at 50 percent.
	
	Additional query words: schedule plus readme.txt
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule100 kbSchedule100a
	Version           : :1.0,1.0a
	
	=============================================================================
	

{% endraw %}
