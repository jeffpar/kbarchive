---
layout: page
title: "Q184271: INFO: Updated AutoAccept Event Script"
permalink: /kb/184/Q184271/
---

## Q184271: INFO: Updated AutoAccept Event Script

	Article: Q184271
	Product(s): Microsoft Exchange
	Version(s): 1.2,5.5
	Operating System(s): 
	Keyword(s): kbCDO kbCDO121 kbFAQ
	Last Modified: 12-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Collaboration Data Objects (CDO), version 1.2 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Exchange Server version 5.5 provides Autoaccept.txt as one of the
	Scripting Agent Sample Scripts. Autoaccept.txt is provided as a sample for
	automatically handling meeting requests for a Conference Room or other
	resource.
	
	This article provides an extended version of this sample that includes the
	following additional functionality:
	
	- Processes meeting cancellations.
	
	- Processes meeting updates to allow for extending existing meeting requests,
	  if the additional time slot is available.
	
	- Processes Schedule+ 1.0 meeting requests and updates so that the responses
	  are registered in the organizer's Schedule+ appointment.
	
	- Processes recurring meeting requests, updates, and cancellations (except
	  updates to single instances of recurring meeting requests).
	
	
	MORE INFORMATION
	================
	
	For instructions about how to install this sample script, please see the
	Readme.txt file in the Server\Support\Collab\Sampler\Scripts\AUTOACCEPT folder
	on the Microsoft Exchange Server 5.5 CD-ROM.
	
	Sample Code
	-----------
	
	   <SCRIPT RunAt=Server Language=VBScript>
	   '---------------------------------------------------------------------'
	   'THIS CODE AND INFORMATION IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY
	   'KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
	   'IMPLIED WARRANTIES OF MERCHANTABILITY AND/OR FITNESS FOR A PARTICULAR
	   'PURPOSE
	   '---------------------------------------------------------------------'
	   ' NAME: Autoaccept.Txt
	   ' FILE DESCRIPTION: Auto-accept meeting request sample for Exchange
	   '                   Scripting Agent.
	   ' Copyright (c) Microsoft Corporation 1993-1997. All rights reserved.
	   ' NOTE: This example uses the Meeting Item Object. Please
	   '       see the MAPI SDK for the details of the properties, constants
	   '       and methods of this object.
	   '---------------------------------------------------------------------'
	   Option Explicit
	
	   '---------------------------------------------------------------------'
	   ' Global Variables
	   '---------------------------------------------------------------------'
	   Dim g_bstrDebug    'Debug String
	
	   '---------------------------------------------------------------------'
	   '    CONSTANTS
	   '---------------------------------------------------------------------'
	   Dim g_Const_CDOAppointmentItem
	   Dim g_Const_CDOMeetingItem
	   Dim g_Const_CDOMeetingRequest
	   Dim g_Const_CDOMeetingResponse
	   Dim g_Const_CDOResponseDeclined
	   Dim g_Const_CDOResponseAccepted
	   Dim g_Const_CDOResponseTentative
	   Dim g_Const_CdoFree
	   Dim g_Const_CdoBusy
	   Dim g_Const_CdoTentative
	   Dim g_Const_CdoOutOfOffice
	   Dim g_Const_CdoNonMeeting
	   Dim g_Const_CdoMeeting
	   Dim g_Const_CdoMeetingCanceled
	   Dim g_Const_CdoMeetingReceived
	
	   Dim g_Const_CdoRecurTypeDaily
	   Dim g_Const_CdoRecurTypeWeekly
	   Dim g_Const_CdoRecurTypeMonthly
	   Dim g_Const_CdoRecurTypeMonthlyNth
	   Dim g_Const_CdoRecurTypeYearly
	   Dim g_Const_CdoRecurTypeYearlyNth
	   Dim g_Const_CdoSunday
	   Dim g_Const_CdoMonday
	   Dim g_Const_CdoTuesday
	   Dim g_Const_CdoWednesday
	   Dim g_Const_CdoThursday
	   Dim g_Const_CdoFriday
	   Dim g_Const_CdoSaturday
	
	   Dim g_Const_MaxYearRecur
	   Dim g_Const_MaxOtherRecur
	   Dim g_Const_LastInstance
	
	   ' Assign values to Constants.
	    g_Const_CDOAppointmentItem = 26
	    g_Const_CDOMeetingItem = 27
	    g_Const_CDOMeetingRequest = 1
	    g_Const_CDOMeetingResponse = 2 'Not used but given for reference.
	    g_Const_CDOResponseDeclined = 4
	    g_Const_CDOResponseAccepted = 3
	    g_Const_CDOResponseTentative = 2
	
	    g_Const_CdoBusy = "2"         'Constants for BusyFree result we show
	    g_Const_CdoFree = "0"         'an example for using CdoFree.
	    g_Const_CdoOutOfOffice = "3"
	    g_Const_CdoTentative = "1"
	
	    g_Const_CdoNonMeeting = 0
	    g_Const_CdoMeeting = 1
	    g_Const_CdoMeetingCanceled = 5
	    g_Const_CdoMeetingReceived = 3
	
	    g_Const_CdoRecurTypeDaily = 0
	    g_Const_CdoRecurTypeWeekly = 1
	    g_Const_CdoRecurTypeMonthly = 2
	    g_Const_CdoRecurTypeMonthlyNth = 3
	    g_Const_CdoRecurTypeYearly = 5
	    g_Const_CdoRecurTypeYearlyNth = 6
	
	    g_Const_CdoSunday = 1
	    g_Const_CdoMonday = 2
	    g_Const_CdoTuesday = 4
	    g_Const_CdoWednesday = 8
	    g_Const_CdoThursday = 16
	    g_Const_CdoFriday = 32
	    g_Const_CdoSaturday = 64
	
	    g_Const_LastInstance = 5
	
	    'Max number of months to check for conflicts on
	    'yearly recurrence.
	    g_Const_MaxYearRecur = 48
	
	    'Max number of months to check for conflicts on
	    'daily/weekly/monthly recurrence.
	    g_Const_MaxOtherRecur = 12
	
	   '-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-'
	   '                        EVENT HANDLERS
	   '-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-'
	   '---------------------------------------------------------------------'
	   '   Name: Folder_OnMessageCreated
	   '   Description: This event fires when a new message is added
	   '                to the folder.
	   '---------------------------------------------------------------------'
	
	    Public Sub Folder_OnMessageCreated
	
	       On Error Resume Next
	       Dim oStores         'Stores Object.
	       Dim oMtg            'Meeting Object.
	       Dim oAppt           'Appointment Object.
	       Dim oMtgResp        'Meeting Response Object.
	       Dim oUser           'User Object.
	
	       Dim Resp            'Response integer variable.
	       Dim sConflicts      'String description of recurring appointment
	                           'conflict.
	
	       Set oUser = EventDetails.Session.CurrentUser
	
	       Call DebugAppend("AUTOACCEPT - Folder_OnMessageCreated",False)
	
	       'Get Incoming Meeting Message.
	       Set oMtg = _
	           EventDetails.Session.GetMessage(EventDetails.MessageID, Null)
	
	       If oMtg.Class <> g_Const_CDOMeetingItem Then
	
	          Call DebugAppend( _
	               "Message is not a meeting request or response: " & _
	               oMtg.Class,False)
	
	       Else       'Ok, It's a meeting, but is it a request ?
	          If oMtg.MeetingType <> g_Const_CDOMeetingRequest Then
	
	             Call DebugAppend("Meeting item is not a request: ",False)
	
	          Else
	             ' For Schedule+ 1.0 Cancellations, the associated appointment
	             ' does not exist, so we must check the type of the meeting
	             ' request.
	             If (oMtg.Type = "IPM.Schedule.Meeting.Canceled") And _
	                (oMtg.Sender.Type = "MS") Then
	                Call DeleteOriginalAppt(oMtg.Fields(&H00620003).Value, _
	                     EventDetails.Session.GetDefaultFolder(0))
	                oMtg.Delete
	             Else
	
	                On Error Resume Next
	                Set oAppt = oMtg.GetAssociatedAppointment
	
	                If Err.Number = 0 Then  ' GetAssociatedAppointment OK
	
	                   If oAppt.MeetingStatus = g_Const_CdoMeetingReceived Then
	
	                      'We only need to delete the associated appointment
	                      'and the original appointment (if this is an update)
	                      'if this request is from Schedule+ 1.0.
	                      If oMtg.Sender.Type = "MS" Then
	                         oAppt.Delete
	                         Call DeleteOriginalAppt( _
	                                  oMtg.Fields(&H00620003).Value, _
	                                  EventDetails.Session.GetDefaultFolder(0))
	                      End If
	
	                      If IsFree(oUser, oAppt, _
	                             EventDetails.Session.GetDefaultFolder(0), _
	                             sConflicts) Then
	
	                         Call DebugAppend("Free - Accepting meeting",False)
	
	                         Set oMtgResp = _
	                               oMtg.Respond(g_Const_CDOResponseAccepted)
	
	                         Set oAppt = oMtgResp.GetAssociatedAppointment
	                         oAppt.ReplyTime = Now()
	                         oAppt.Fields.Add &H00620003, _
	                                       oMtg.Fields(&H00620003).Value
	                         oAppt.Update
	                         Set oAppt = Nothing
	
	                         oMtgResp.Text = _
	                          "Conference room is available. Meeting accepted."
	
	                      Else
	
	                         Set oMtgResp = _
	                               oMtg.Respond(g_Const_CDOResponseDeclined)
	
	                         ' Set text of response message.
	                         If oAppt.IsRecurring Then
	
	                        oMtgResp.Text = "Conference room is unavailable " _
	                                 & "for all instances of your recurring " _
	                                 & "meeting request. The first conflict " _
	                                  & "found was on " & sConflicts & ". " _
	                                  & " Meeting declined. "
	
	                       Call DebugAppend("Conflict found on " & sConflicts _
	                                  & " - Declining meeting", False)
	
	                        Else
	
	                        oMtgResp.Text = "Conference room is unavailable " _
	                              & "for the requested time. Meeting declined."
	
	                            Call DebugAppend( _
	                               "Conflict found - Declining meeting", False)
	
	                         End If
	
	                         Set oAppt = Nothing
	
	                      End If
	
	                      If oMtg.Sender.Type = "MS" Then
	
	                         'Copy PR_OWNER_APPT_ID so that the response is
	                         'registered when received by Schedule+ 1.0.
	                         oMtgResp.Fields(&H00620003).Value = _
	                                  oMtg.Fields(&H00620003).Value
	
	                         'Copy PR_SENT_REPRESENTING... properties to
	                         'PR_RCVD_REPRESENTING properties to prevent
	                         '"You are not this person's assistant".
	                         oMtgResp.Fields.Add &H00430102, _
	                                  oMtg.Fields(&H00410102).Value
	                         oMtgResp.Fields.Add &H0044001E, _
	                                  oMtg.Fields(&H0042001E).Value
	
	                      End If
	
	                      oMtgResp.Send
	                      oMtg.Delete
	
	                   Else
	
	                     If oAppt.MeetingStatus=g_Const_CdoMeetingCanceled Then
	
	                         oAppt.Delete
	                         oMtg.Delete
	
	                         Call DebugAppend("Meeting Canceled!", False)
	
	                      End If      'g_Const_CdoMeetingCanceled
	
	                   End If         'g_Const_CdoMeetingReceived
	
	                Else     ' GetAssociatedAppointment Failed.
	
	                   ' If the meeting is a cancellation and the associated
	                   ' appointment is not in the calendar, then just delete
	                   ' the cancellation notice.
	                   If (oMtg.Type = "IPM.Schedule.Meeting.Canceled") Then
	
	                      Call DebugAppend("Meeting is not in calendar..." & _
	                           "deleting meeting cancellation notice", False)
	                      err.Clear
	                      oMtg.Delete
	
	                   End If
	
	                End If            'Err.Number = 0
	
	             End If
	
	          End If
	
	       End If
	
	       'Check for any possible sys errors
	       Call DebugAppend("Error Detected: ",True)
	
	       Script.Response = g_bstrDebug
	
	    End Sub
	
	   '---------------------------------------------------------------------'
	   '   Name: Message_OnChange
	   '   Description: This event fires when a message in the
	   '                folder is changed.
	   '---------------------------------------------------------------------'
	
	    Public Sub Message_OnChange   'Not Used
	
	    End Sub
	
	   '---------------------------------------------------------------------'
	   '   Name: Folder_OnMessageDeleted
	   '   Description: This event fires when a message is deleted
	   '                from the folder.
	   '---------------------------------------------------------------------'
	
	    Public Sub Folder_OnMessageDeleted   'Not Used
	
	    End Sub
	
	   '---------------------------------------------------------------------'
	   '   Name: Folder_OnTimer
	   '   Description: This event fires when the timer on the
	   '              folder expires.
	   '---------------------------------------------------------------------'
	
	    Public Sub Folder_OnTimer   'Not Used
	
	    End Sub
	
	   '-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-'
	   '                  PRIVATE FUNCTIONS/SUBS
	   '-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-'
	   '---------------------------------------------------------------------'
	   '   Name: DebugAppend
	   '   Area: Debug
	   '   Desc: Simple Debugging Function
	   '   Parm: String Text, Bool ErrorFlag
	   '---------------------------------------------------------------------'
	    Private Sub DebugAppend(bstrParm,boolErrChkFlag)
	       If boolErrChkFlag = True Then
	          If err.number <> 0 Then
	             g_bstrDebug = g_bstrDebug & bstrParm & "-" & _
	                           cstr(err.number) & err.description & vbCrLf
	             err.clear
	          End If
	       Else
	          g_bstrDebug = g_bstrDebug & bstrParm & vbCrLf
	       End If
	    End Sub
	
	   '---------------------------------------------------------------------'
	   '   Name: DeleteOriginalAppt
	   '   Desc: Schedule+ 1.0 Mtg Request Update Handling
	   '   Parm: Integer PR_OWNER_APPT_ID, Object CalendarFolder
	   '---------------------------------------------------------------------'
	
	    Private Sub DeleteOriginalAppt (bApptID, oCalendar)
	
	       On Error Resume Next
	       Dim MsgColl   ' Messages collection
	       Dim Appt      ' Appointment
	       Dim tmpField
	
	       Set tmpField = Nothing
	       Set MsgColl = oCalendar.Messages
	
	       For Each Appt In MsgColl
	
	          On Error Resume Next
	          Set tmpField = Appt.Fields(&H00620003)
	
	          If Not tmpField Is Nothing Then
	
	             If tmpField.Value = bApptID Then
	
	                Appt.Delete  ' Delete appt
	                Exit For
	
	             End If
	
	          End If
	
	          Set tmpField = Nothing
	
	       Next
	
	       Set Appt = Nothing
	       Set MsgColl = Nothing
	       Set oCalendar = Nothing
	
	    End Sub
	
	   '---------------------------------------------------------------------'
	   '   Name: FindConflicts
	   '   Desc: Manually Check Free/Busy in Calendar
	   '   Parm: Object CalendarFolder, DateTime StartDate, DateTime EndDate
	   '---------------------------------------------------------------------'
	
	    Private Function FindConflicts (oCalendar, dStartTime, dEndTime)
	
	       On Error Resume Next
	       Dim oMsgColl   'Messages Collection
	       Dim oMsgFilter 'Filter for Messages Collection
	       Dim oAppt      'Appointment
	       Dim bFoundConflict
	
	       bFoundConflict = "0"    'Default: Time is Free
	
	       Set oMsgColl = oCalendar.Messages
	       Set oMsgFilter = oMsgColl.Filter
	
	       oMsgFilter.Fields.Add &H600040, dEndtime
	       oMsgFilter.Fields.Add &H610040, dStartTime
	
	       Set oAppt = oMsgColl.GetFirst
	
	       If oAppt Is Nothing Then   ' No appointments met filter condition
	
	          bFoundConflict = "0"    ' so time is free.
	
	       Else
	
	          Do While (Not oAppt Is Nothing)
	
	             ' We'll ignore appointments that start when ours ends
	             ' or that end when ours starts.
	             If(Not (FormatDateTime(oAppt.StartTime, vbGeneralDate) = _
	                     FormatDateTime(dEndTime, vbGeneralDate) Or _
	                     FormatDateTime(oAppt.EndTime, vbGeneralDate) = _
	                     FormatDateTime(dStartTime, vbGeneralDate))) Then
	
	                ' Make sure the appointment is not "free"
	                If (Not oAppt.BusyStatus = 0) Then
	
	                   bFoundConflict = "2"
	                   Exit Do
	
	                End If
	
	             End If
	
	             Set oAppt = oMsgColl.GetNext
	
	          Loop
	
	       End If
	
	       ' Now we do a completely separate check for appointments that
	       ' start in the middle of a recurring appointment instance.
	       Set oMsgColl = oCalendar.Messages
	       Set oMsgFilter = oMsgColl.Filter
	
	       oMsgFilter.Fields.Add &H600040, dEndTime
	       Dim s_date
	       s_date = CDate(dStartTime)
	       oMsgFilter.Fields.Add &H610040, DateSerial(Year(s_date), _
	           Month(s_date), Day(s_date) - 1)
	
	       ' We have to go back far enough to catch all instances of
	       ' appointments that last long enough that they could extend
	       ' to the start of our requested time period.
	       ' 24 hrs seems like a reasonable period for this (based on
	       ' the assumption that no one will have an room booked for
	       ' more than 24 hours)
	
	       Set oAppt = oMsgColl.GetFirst
	
	       If oAppt Is Nothing Then   ' No appointments met filter condition
	
	          bFoundConflict = "0"    ' so time is free.
	
	       Else
	          Do While (Not oAppt Is Nothing)
	             ' Ignore appointments that start when ours ends or end when
	             ' ours starts.
	             If ( Not ( CDate(oAppt.StartTime) = CDate(dEndTime) Or _
	                CDate(oAppt.EndTime) = CDate(dStartTime) ) ) Then
	             ' Attempt at additional checks to catch cases where our
	             ' required time period starts during an instance of a
	             ' recurring appointment.
	             ' Have to use CDate to get date comparisons to work correctly.
	             If (CDate(oAppt.StartTime) <= CDate(dStartTime)) And _
	               (CDate(oAppt.EndTime) >= CDate(dStartTime)) Then
	
	                If (Not (oAppt.BusyStatus = 0)) Then
	
	                    bFoundConflict = "2"
	                    Exit Do
	
	                End If
	
	              End If
	
	             End If
	
	             Set oAppt = oMsgColl.GetNext
	
	          Loop
	
	        End If
	
	       FindConflicts = bFoundConflict
	
	    End Function
	
	   '---------------------------------------------------------------------'
	   '   Name: IsFree
	   '   Desc: Checks the user's calendar for conflicts.
	   '         Returns True if no conflicts were found otherwise False.
	   '         Handles recurring meetings
	   '   Parm: AdrressEntry object, AppointmentItem object, Folder object,
	   '         String ConflictingAppt
	   '---------------------------------------------------------------------'
	
	    Private Function IsFree(oUser, oAppt, oCalendar, ByRef sConflict)
	
	       On Error Resume Next
	       Dim NoOfMins    'Number of minutes in appointment
	       Dim Resp        'GetFreeBusy() response string
	       Dim oRecur      'RecurrencePattern object
	       Dim FirstSTime  'Start date/time of first ever occurrence
	       Dim STime       'Current Start date/time
	       Dim ETime       'Current End date/time
	
	       IsFree = True   'Default result = success
	
	       If oAppt.IsRecurring Then
	
	          'Recurring meeting, get RecurrencePattern object for meeting
	          Call DebugAppend("Meeting is recurring",False)
	          Set oRecur = oAppt.GetRecurrencePattern()
	
	          'Start time
	          STime = oRecur.StartTime
	          FirstSTime = STime
	
	          'Calculate the total number of minutes in the appointment.
	          NoOfMins = DateDiff("n", STime, oRecur.EndTime)
	
	          'Loop until a busy slot is found or all recurrences are free.
	          Do
	
	             'Recalculate End Time
	             ETime = DateAdd("n", NoOfMins, STime)
	
	             'Check free/busy status.
	             Resp = FindConflicts(oCalendar, STime, ETime)
	
	             'No point continuing if slot is busy.
	             If Resp <> g_Const_CdoFree then
	
	                sConflict = FormatDateTime(STime, vbShortDate)
	                IsFree = False
	                Exit Do
	
	             End If
	
	             'Calculate the next recurrence Start time based on recurrence
	             'type.
	             Select Case oRecur.RecurrenceType
	
	                Case g_Const_CdoRecurTypeDaily
	
	                    'Add interval days.
	                    STime = DateAdd("d", oRecur.Interval, STime)
	
	                Case g_Const_CdoRecurTypeMonthly
	
	                    'Add interval months.
	                    STime = DateAdd("m", oRecur.Interval, STime)
	
	                Case g_Const_CdoRecurTypeYearly
	
	                    'Add interval years.
	                    STime = DateAdd("m", 12 * oRecur.Interval, STime)
	
	                Case g_Const_CdoRecurTypeMonthlyNth
	
	                    'Add interval months then find next instance in the
	                    'month.
	                    STime = DateAdd("m", oRecur.Interval, STime)
	                    Call FindInstanceInMonth(FirstSTime, oRecur.Instance, _
	                      STime)
	
	                Case g_Const_CdoRecurTypeYearlyNth
	
	                    'Add interval years then find next instance in month.
	                    STime = DateAdd("m", 12 * oRecur.Interval, STime)
	                    Call FindInstanceInMonth(FirstSTime, oRecur.Instance, _
	                      STime)
	
	                Case g_Const_CdoRecurTypeWeekly
	
	                    'Find the next recurrence this week.
	                    Call FindInstanceInWeek(oRecur.DayOfWeekMask, _
	                                            oRecur.Interval, STime)
	
	                Case Else
	
	                  Call DebugAppend("Recurrence Type did not match list: " _
	                         & oRecur.RecurrenceType, False)
	
	             End Select
	
	            'Limit number of recurrences checked for yearly meetings and
	            'daily/weekly/monthly meetings.
	            If (oRecur.RecurrenceType = g_Const_CdoRecurTypeYearlyNth) Or _
	               (oRecur.RecurrenceType = g_Const_CdoRecurTypeYearly) Then
	
	            If DateDiff("m", FirstSTime, STime) > g_Const_MaxYearRecur Then
	
	                    Exit Do
	
	                End If
	
	             Else
	
	           If DateDiff("m", FirstSTime, STime) > g_Const_MaxOtherRecur Then
	
	                    Exit Do
	
	                End If
	
	             End If
	
	          Loop While (ETime <= oRecur.PatternEndDate)
	
	       Else
	
	          'Normal, one-off meeting.
	          Resp = FindConflicts(oCalendar, oAppt.starttime, oAppt.endtime)
	
	          If Resp <> g_Const_CdoFree then
	
	             IsFree = False
	
	          End If
	
	       End If
	
	    End Function
	
	   '---------------------------------------------------------------------'
	   '   Name: FindInstanceInMonth
	   '   Desc: Returns the start date/time of the next meeting in the
	   '         current month.
	   '   Parm: DateTime FirstStartTime, Long InstanceOfDayInMonth,
	   '         DateTime NewStartTime
	   '---------------------------------------------------------------------'
	
	    Private Sub FindInstanceInMonth(FirstSTime, nInstance, ByRef STime)
	
	       On Error Resume Next
	       Dim LastWeek
	
	       'Start from the beginning of the month.
	       STime = DateAdd("d", (0 - Day(STime)) + 1, STime)
	
	       'Find the first day of recurrence (Monday) in the month.
	       'If the beginning of the month falls after the day of recurrence
	       'we use next week's instance.
	       If Weekday(FirstSTime) < Weekday(STime) Then
	
	          STime = DateAdd("d", _
	                  (7 - Weekday(STime)) + Weekday(FirstSTime), STime)
	
	       Else
	
	          STime = DateAdd("d", _
	                  Weekday(FirstSTime) - Weekday(STime), STime)
	
	       End If
	
	       'If the meeting is scheduled for the last week of a period, then
	       'we look for a 5th instance (albeit clumsily).
	       If (nInstance = g_Const_LastInstance) Then
	
	         'If 4 weeks from hence we're still in the same month then we
	         'have 5th instance, otherwise the last week is the 4th instance.
	          LastWeek = DateAdd("d", 28, STime)
	
	          If Month(LastWeek) <> Month(STime) Then
	
	             STime = DateAdd("d", 21, STime)
	
	          Else
	
	             STime = LastWeek
	
	          End If
	
	       ElseIf (nInstance > 1) Then
	
	          'Go to specific instance.
	          STime = DateAdd("d", (nInstance - 1) * 7, STime)
	
	       End If
	
	    End Sub
	
	   '---------------------------------------------------------------------'
	   '   Name: FindInstanceInWeek
	   '   Desc: Returns the start date/time for the next meeting in the
	   '         current week.
	   '   Parm: Long DayOfWeekMask, Long IntervalOfAppt,
	   '         DateTime NewStartTime
	   '---------------------------------------------------------------------'
	
	    Private Sub FindInstanceInWeek(DOWMask, nInterval, ByRef STime)
	
	       On Error Resume Next
	       'Iterate through each day of the week until matching day is found.
	       Do
	
	          'If the meetings are scheduled at > 1 week intervals and we've
	          'reached the end of the current week, we skip to the next
	          'interval.
	          If (Weekday(STime) = 7) And (nInterval > 1) Then
	
	              STime = DateAdd("d", (nInterval - 1) * 7, STime)
	
	          End If
	
	       Loop While GetNextDayOfWeek(DOWMask, STime) <> True
	
	    End Sub
	
	   '---------------------------------------------------------------------'
	   '   Name: GetNextDayOfWeek
	   '   Desc: Returns the start date/time of the next meeting matching
	   '         the DayOfWeek mask for the current week.
	   '   Parm: Long DayOfWeekMask, DateTime NewStartTime
	   '---------------------------------------------------------------------'
	
	    Private Function GetNextDayOfWeek(nMask, ByRef t)
	
	       On Error Resume Next
	       Dim i
	
	       GetNextDayOfWeek = False    'Default result.
	
	       'Iterate through each day in the week until a match is found.
	       'in the DayOfWeek mask
	       Do
	
	          t = DateAdd("d", 1, t)
	
	          i = 2 ^ (Weekday(t) - 1)
	
	          If ((nMask And i) = i) Then
	
	             GetNextDayOfWeek = True
	             Exit Do
	
	          End If
	
	       Loop While Weekday(t) <> 7
	
	    End Function
	
	    </SCRIPT>
	
	NOTE: This is a sample script; support is not available for the script beyond
	this explanation of how to install and use it. This sample is provided as an
	example of how to use the scripting agent.
	
	Additional query words: autoaccept auto accept outlook
	
	======================================================================
	Keywords          : kbCDO kbCDO121 kbFAQ 
	Technology        : kbAudDeveloper kbCDOsearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbCDO120
	Version           : :1.2,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
