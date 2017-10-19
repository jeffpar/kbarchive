---
layout: page
title: "Q138002: PC WSPlus: Complete List of SCHDPLUS.INI Settings"
permalink: /kb/138/Q138002/
---

## Q138002: PC WSPlus: Complete List of SCHDPLUS.INI Settings

	Article: Q138002
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:1.0,1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-SEP-1999
	
	1.00 1.00a
	WINDOWS
	kbother
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The SCHDPLUS.INI file is used to define settings used by Schedule+. Schedule+
	uses the SCHDPLUS.INI file to track basic information about the your schedule,
	such as display and general option settings, current window positions, and
	printer information.
	
	MORE INFORMATION
	================
	
	The SCHDPLUS.INI file contains the following sections:
	
	SECTION                                  DEFINITION
	-----------------------------------------------------------------------
	
	[Microsoft Schedule]                     Defines the appearance and
	                                        behavior of Schedule+.
	
	[Microsoft Schedule+ Appt Books]         Indicates the number and list
	                                        of other users' Appointment
	                                        Books that were open when you
	                                        exited Schedule+.
	
	[Microsoft Schedule+ Archives]           Indicates the number and list of
	                                        Archive files that were open
	                                        when you exited Schedule+.
	
	NOTE: When you use the above entries, most of them are assigned defaults. You
	should not need to change the Schedule+ settings. To change the appearance and
	behavior of Schedule+, use the appropriate Schedule+ menu commands.
	
	[Microsoft Schedule]
	
	This section defines the appearance and behavior of Schedule+.
	
	ENTRY                                    DEFINITION
	-----------------------------------------------------------------------
	
	AppPath= pathname                        Specifies the location of the
	                                        Schedule+ program and execution
	                                        files. Microsoft Mail uses this
	                                        path to find Schedule+ when you
	                                        receive a meeting request. The
	                                        default is the WINDOWS directory.
	
	AppointmentView= left right top bottom   Specifies the coordinates for
	                                        the position of the Appointment
	                                        Book window on the screen. These
	                                        four numbers are written by the
	                                        Schedule+ application when you
	                                        exit, and are used to restore the
	                                        windows to the last displayed
	                                        position.
	
	                                        These numbers are pixel
	                                        coordinates for the four sides of
	                                        the Appointment Book window: left,
	                                        right, top, and bottom.
	
	NOTE: For additional information on the AppointmentView setting, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q86609 Appointment or Message Window Off Screen
	
	ApptBookColor= colornumber(1-17)         Specifies the preference setting
	                                        for the background color of the
	                                        Appointment Book. The default
	                                        color is yellow. The color number
	                                        corresponds (in order) to the
	                                        colors shown in the Display dialog
	                                        box from the Options menu.
	
	ApptBookLinesColor= colornumber(1-17)    Specifies the preference setting
	                                        for the color of the lines in the
	                                        Appointment Book. The default
	                                        color is black. The color number
	                                        corresponds (in order) to the
	                                        colors shown in the Display dialog
	                                        box from the Options menu.
	
	CopyTime= minutes                        Specifies the time interval that
	                                        Schedule+ copies your online .CAL
	                                        file to your local .CAL file
	                                        (occurs in idle time). The default
	                                        is that your online .CAL file is
	                                        copied to your local .CAL
	                                        workstation every 15 minutes.
	
	CreateFileFirstTime= 0 | 1               Specifies whether an online
	                                        calendar (.CAL) file should be
	                                        created for a first-time Schedule+
	                                        user. If this entry is 1, an
	                                        online calendar (.CAL) file is
	                                        created the first time a user
	                                        signs on to Schedule+. If 0, an
	                                        online calendar file is not
	                                        created. The default is 1.
	
	DefaultPrinter= printer name,            Indicated the current default
	driver name, port                        printer port and its network path
	                                        as specified in the Windows
	                                        Control Panel. This is the default
	                                        printer Schedule+ uses for
	                                        printing schedule information.
	
	DefaultPrivateTask= 0 | 1                Defines the default of the Private
	                                        check box. If this entry is 1, the
	                                        Private check box for new tasks
	                                        is checked by default. If this
	                                        entry is 0, the Private check for
	                                        new tasks is not checked by
	                                        default. The default is 1.
	
	NOTE: For additional information on the DefaultPrivateTask setting, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q110096 DefaultPrivateTask= Does Not Work as Documented
	
	DefaultRemindAgain= 0 | 1                Defines the default state of the
	                                        Remind Again check box. If this
	                                        entry is 1, you are reminded again
	                                        of your appointments at the
	                                        requested intervals. If this entry
	                                        is 0, your are reminded of your
	                                        appointment only once. The default
	                                        is 0.
	
	DefaultRemindAgainAmount= timeunits      Specifies the default number of
	                                        time units to wait (interval)
	                                        before reminding you of your
	                                        appointment again. The default
	                                        time is 5 time units.
	
	DefaultRemindAgainUnits=                 Specifies the type of time
	minutes|hours|days|weeks|months          units you are using in the
	                                        DefaultRemindAgainAmount= entry.
	                                        The default is in minutes.
	
	DemosEnabled= 0 | 1                      Specifies whether the Demos menu
	                                        option is to be displayed in the
	                                        Help menu.
	
	                                        If the entry is 1, the Demos menu
	                                        option is displayed in the Help
	                                        menu. If this entry is 0, the
	                                        Demos menu option is not shown.
	                                        The default is 0. (The Schedule+
	                                        demos are not provided with
	                                        Windows for Workgroups, and are
	                                        shipped as part of the Microsoft
	                                        Mail and Schedule+ Extensions for
	                                        Windows for Workgroups product.)
	
	ExportNoNotes= 0 | 1                     Indicates whether the user chose
	                                        to export notes. If this entry is
	                                        0, notes are exported. If this
	                                        entry is 1, the notes are not
	                                        exported. The default is 0.
	
	ExportRange= 0 | 1                       Indicates the range of schedule
	                                        information to be exported. If
	                                        this entry is 0, the entire
	                                        schedule file is exported, if this
	                                        entry is 1, a particular range is
	                                        written out. This entry is written
	                                        by the driver used to save
	                                        Schedule+ information into a given
	                                        file format.
	
	ExportType= 0 | 1                        Indicates the current default file
	                                        type for exporting your schedule.
	                                        If this entry is 0, the default
	                                        file type for exporting your
	                                        schedule is the Schedule+ format.
	                                        If this entry is 1, the file type
	                                        for export is Text. The default
	                                        is 0.
	
	ImportDoNotAddDuplicates= 0 | 1          Indicates whether the user chose
	                                        to import duplicate appointments.
	                                        If this entry is 0, duplicate
	                                        appointments are imported. If this
	                                        entry is 1, your duplicate
	                                        appointments are not imported. The
	                                        default is 0.
	
	ImportDoNotAskAboutConflicts= 0 | 1      Indicates whether the user chose
	                                        to be asked about conflicting
	                                        appointments during the import
	                                        process. If this entry is 0, you
	                                        are prompted for each conflicting
	                                        appointment during the import
	                                        process-in this case, you are
	                                        asked whether or not to add each
	                                        conflicting appointment. A value
	                                        of 1 indicates that you are not
	                                        asked about conflicts; they are
	                                        added automatically. The default
	                                        is 0.
	
	ImportType= 0 | 1                        Indicates the current default file
	                                        type for importing a schedule
	                                        file. If this entry is 0, the file
	                                        type for importing your schedule
	                                        is the Schedule+ format. If the
	                                        entry 1, the file type is the
	                                        Windows calendar format. The
	                                        default is 0.
	
	LargeFont= 1 | 2                         Specifies the preference setting
	                                        for the font size of text
	                                        displayed in the Appointment Book
	                                        and Planner. If this entry is 1,
	                                        the font size of text is 10
	                                        points. If the entry is 2, the
	                                        font is 8 points. The default
	                                        is 2.
	
	LocalPath= path                          Specifies the location of the last
	                                        user's local calendar (.CAL) file.
	
	LocalUser= username                      Specifies the name of the last
	                                        user to use this Schedule+
	                                        workstation software on this
	                                        computer.
	
	For additional information on the LocalUser setting, please see the following
	article in the Microsoft Knowledge Base:
	
	  105163 How to Change User Name Displayed on the Desktop
	
	MainWindow= left right top bottom        Specifies the coordinates for the
	                                        position of the Schedule+
	                                        application window on the screen.
	                                        These four numbers are written by
	                                        the Schedule+ application when you
	                                        exit, and are used to restore the
	                                        Schedule+ window to the last
	                                        displayed position. These numbers
	                                        are pixel coordinates for the four
	                                        sides of the main window: left
	                                        right top bottom.
	
	For additional information on the MainWindow setting, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q86609 Appointment or Message Window Off Screen
	
	NoStatusBar=                             Indicates the preference setting
	                                        for displaying the status bar.
	
	                                        If this entry is 1, status bar is
	                                        not displayed. If set to 0, the
	                                        status bar is displayed. The
	                                        default is 0.
	
	OtherColor= colornumber(1-17)            Specifies the preference setting
	                                        for the color of the other user's
	                                        appointments in the Planner. The
	                                        default color is red. The color
	                                        number corresponds (in order) to
	                                        the colors shown in the Display
	                                        dialog box available from the
	                                        Options menu.
	
	PageBackgroundColor= colornumber(1-17)   Specifies the preference setting
	                                        for the background color of the
	                                        Schedule+ window. The default
	                                        color is gray. The color number
	                                        corresponds (in order) to the
	                                        colors shown in the Display dialog
	                                        box available from the Options
	                                        menu.
	
	PlannerColor= colornumber(1-17)          Specifies the preference setting
	                                        for the background color of the
	                                        Planner window. The default color
	                                        is white. The color number
	                                        corresponds (in order) to the
	                                        colors shown in the Display dialog
	                                        box available from the Options
	                                        menu.
	
	PlannerLinesColor= colornumber(1-17)     Specifies the preference setting
	                                        for the color of the lines in the
	                                        Planner. The default color is
	                                        black. The color number
	                                        corresponds (in order) to the
	                                        colors shown in the Display dialog
	                                        box available from the Options
	                                        menu.
	
	PollTime= centiseconds                   Specifies the frequency for
	                                        updating the screen. The default
	                                        time is 6000 centiseconds.
	
	ReminderPollTime= minutes                Specifies the frequency for
	                                        polling the server for alarm
	                                        changes. The default time is 1.
	
	For additional information on the ReminderPollTime, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q105311 Default Reminder Poll Time in Schedule+
	
	RequestSummary= left right top bottom    Specifies the coordinates for the
	                                        position of the Messages window on
	                                        the screen. These four numbers are
	                                        written by the Schedule+
	                                        application when you exit, and are
	                                        used to restore the Messages
	                                        window to the last displayed
	                                        position. These numbers are pixel
	                                        coordinates for the four sides of
	                                        the Message window: left right
	                                        top bottom.
	
	For additional information on the RequestSummary setting, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q86609 Appointment or Message Window Off Screen
	
	ShowActiveTasks= 0 | 1                   Indicates whether the Task list is
	                                        showing all tasks or only active
	                                        tasks, as specified from the Tasks
	                                        menu. If only active tasks are
	                                        displayed, this value is 1. The
	                                        default is 0, indicating that all
	                                        tasks are displayed.
	
	StartupOffline= 0 | 1                    Specifies whether Schedule+ should
	                                        start up using the off-line
	                                        scheduling information, or whether
	                                        the online schedule should be
	                                        used. If this entry is 1,
	                                        Schedule+ is started off-line. The
	                                        default is 0, indicating that
	                                        Schedule+ is started online.
	
	For additional information on the StartupOffline setting, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q125264 Forced to Work Off Line
	
	TaskSortOrder= 0 | 1 | 2                 Specifies the current sort order
	                                        for tasks. If this entry is 0,
	                                        tasks are sorted by priority, if 1
	                                        the tasks are sorted by due date.
	                                        If 2, the tasks are sorted by
	                                        description. The default is 0.
	
	TaskSortSecond= 0 | 1| 2                 Specifies the secondary sort order
	                                        for tasks. If this entry is 0, the
	                                        second sort order is by priority,
	                                        if 1 the second sort is by due
	                                        date. If 2, the second sort is by
	                                        description. The default is 0.
	
	UpdatePostOfficeTime= centiseconds       Specifies the frequency for
	                                        updating the postoffice on the
	                                        server after a change is made. The
	                                        default is 6000 centiseconds
	                                        (sixty minutes).
	
	UserColor= colornumber(1-17)             Specifies the preference setting
	                                        for the color of your own
	                                        appointments in the planner. The
	                                        default color is blue.
	
	ViewNotByProject= 0 | 1                  Indicates whether the tasks in the
	                                        Task list are currently displayed
	                                        by project. If this entry is 1,
	                                        the tasks are not displayed by
	                                        project. The default is 0.
	
	WindowOrder= 0 | 1  1 | 0                Indicates the current display
	                                        order of the Schedule+ windows.
	                                        The Schedule+ window is
	                                        represented by 0, and the Messages
	                                        window is 1. The first value for
	                                        the WindowOrder= entry indicates
	                                        the window that is on top, and the
	                                        second entry identifies the window
	                                        that is behind the top window.
	
	[Microsoft Schedule+ Appt Books]
	
	This section is used to track the open Appointment books of other Schedule+ users
	that you had open when you exited Schedule+.
	
	ENTRY                                    DEFINITION
	
	Count= number                            Indicates the number of other
	                                        users' Appointment Books you had
	                                        open when you exited Schedule+.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q93477 Default Entries in WFWG SCHDPLUS.INI File
	
	[Microsoft Schedule+ Archives]
	
	This section is used to track the open Archive files that you had open when you
	exited Schedule+.
	
	ENTRY                                    DEFINITION
	
	Count= number                            Indicates the number of Archive
	                                        files that you had open when you
	                                        exited Schedule+.
	
	                                        Microsoft Windows for Workgroups
	                                        Resource Kit for Operating System
	                                        Version 3.1
	
	For additional information on Microsoft Windows NT Registry settings, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q102965 REG: Microsoft Schedule+ Entries
	
	Additional query words: 1.00 1.00a schplus sched+ schedule plus
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule100 kbSchedule100a
	Version           : WINDOWS:1.0,1.0a
	
	=============================================================================
	
