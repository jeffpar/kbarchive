---
layout: page
title: "Q178456: SAMPLE: Volume.exe: Set Volume Control Levels Using Visual Basic"
permalink: kb/178/Q178456/
---

## Q178456: SAMPLE: Volume.exe: Set Volume Control Levels Using Visual Basic

	Article: Q178456
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbfile kbsample kbsound kbVBp500 kbVBp600 kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Volume.exe is a self-extracting compressed file that contains a sample project
	demonstrating how to set the volume and microphone levels using Visual Basic.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  Volume.exe
	  (http://download.microsoft.com/download/vb50pro/file/1/WIN98/EN-US/Volume.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	After downloading and running the self-extracting file, the following files are
	copied to the Volume Level Project directory on your hard drive:
	
	 Form1.frm    - the main form in the project
	 Module1.bas  - the module containing the function and type declarations.
	 Project1.vbp - the project file
	 Project1.vbw - the project workspace file
	 Readme.txt   - you are currently reading this file.
	
	To set these microphone and volume levels from Visual Basic, use the following
	Windows API functions:
	
	- GlobalAlloc - allocates the specified number of bytes from the heap.
	
	- GlobalLock - locks a global memory object and returns a pointer to the first
	  byte of the object's memory block. The memory block associated with a locked
	  memory object cannot be moved or discarded.
	
	- GlobalFree - frees the specified global memory object and invalidates its
	  handle.
	
	- mixerClose - closes the specified mixer device.
	
	- mixerGetControlDetails - retrieves details about a single control associated
	  with an audio line.
	
	- mixerGetDevCaps - queries a specified mixer device to determine its
	  capabilities.
	
	- mixerGetID - retrieves the device identifier for a mixer device associated
	  with a specified device handle.
	
	- mixerGetLineControls - retrieves one or more controls associated with an
	  audio line.
	
	- mixerGetLineInfo - retrieves information about a specific line of a mixer
	  device.
	
	- mixerGetNumDevs - retrieves the number of mixer devices present in the
	  system.
	
	- mixerMessage - sends a custom mixer driver message directly to a mixer
	  driver.
	
	- mixerOpen - opens a specified mixer device and ensures that the device will
	  not be removed until the application closes the handle.
	
	- mixerSetControlDetails - sets properties of a single control associated with
	  an audio line.
	
	The next section shows how to create a sample project that uses these functions
	to set the volume and microphone levels.
	
	Create the Sample Project
	-------------------------
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Add two command buttons, two text boxes, and two labels to Form1.
	
	3. Add a Module to the project by completing the following steps:
	
	   - From the Project menu, click Add module. The Add Module dialog box
	     appears.
	
	   - From the New tab, choose Module and click OK. A new module is added to
	     your project.
	
	4. Copy the following code to the Code window of Module1:
	
	        Option Explicit
	
	        Public Const MMSYSERR_NOERROR = 0
	        Public Const MAXPNAMELEN = 32
	        Public Const MIXER_LONG_NAME_CHARS = 64
	        Public Const MIXER_SHORT_NAME_CHARS = 16
	        Public Const MIXER_GETLINEINFOF_COMPONENTTYPE = &H3&
	        Public Const MIXER_GETCONTROLDETAILSF_VALUE = &H0&
	        Public Const MIXER_GETLINECONTROLSF_ONEBYTYPE = &H2&
	        Public Const MIXERLINE_COMPONENTTYPE_DST_FIRST = &H0&
	        Public Const MIXERLINE_COMPONENTTYPE_SRC_FIRST = &H1000&
	
	        Public Const MIXERLINE_COMPONENTTYPE_DST_SPEAKERS = _
	                       (MIXERLINE_COMPONENTTYPE_DST_FIRST + 4)
	
	        Public Const MIXERLINE_COMPONENTTYPE_SRC_MICROPHONE = _
	                       (MIXERLINE_COMPONENTTYPE_SRC_FIRST + 3)
	
	        Public Const MIXERLINE_COMPONENTTYPE_SRC_LINE = _
	                       (MIXERLINE_COMPONENTTYPE_SRC_FIRST + 2)
	
	        Public Const MIXERCONTROL_CT_CLASS_FADER = &H50000000
	        Public Const MIXERCONTROL_CT_UNITS_UNSIGNED = &H30000
	
	        Public Const MIXERCONTROL_CONTROLTYPE_FADER = _
	                       (MIXERCONTROL_CT_CLASS_FADER Or _
	                       MIXERCONTROL_CT_UNITS_UNSIGNED)
	
	        Public Const MIXERCONTROL_CONTROLTYPE_VOLUME = _
	                       (MIXERCONTROL_CONTROLTYPE_FADER + 1)
	
	        Declare Function mixerClose Lib "winmm.dll" _
	                       (ByVal hmx As Long) As Long
	
	        Declare Function mixerGetControlDetails Lib "winmm.dll" _
	                       Alias "mixerGetControlDetailsA" _
	                       (ByVal hmxobj As Long, _
	                       pmxcd As MIXERCONTROLDETAILS, _
	                       ByVal fdwDetails As Long) As Long
	
	        Declare Function mixerGetDevCaps Lib "winmm.dll" _
	                       Alias "mixerGetDevCapsA" _
	                       (ByVal uMxId As Long, _
	                       ByVal pmxcaps As MIXERCAPS, _
	                       ByVal cbmxcaps As Long) As Long
	
	        Declare Function mixerGetID Lib "winmm.dll" _
	                       (ByVal hmxobj As Long, _
	                       pumxID As Long, _
	                       ByVal fdwId As Long) As Long
	
	        Declare Function mixerGetLineControls Lib "winmm.dll" _
	                       Alias "mixerGetLineControlsA" _
	                       (ByVal hmxobj As Long, _
	                       pmxlc As MIXERLINECONTROLS, _
	                       ByVal fdwControls As Long) As Long
	
	        Declare Function mixerGetLineInfo Lib "winmm.dll" _
	                       Alias "mixerGetLineInfoA" _
	                       (ByVal hmxobj As Long, _
	                       pmxl As MIXERLINE, _
	                       ByVal fdwInfo As Long) As Long
	
	        Declare Function mixerGetNumDevs Lib "winmm.dll" () As Long
	
	        Declare Function mixerMessage Lib "winmm.dll" _
	                       (ByVal hmx As Long, _
	                       ByVal uMsg As Long, _
	                       ByVal dwParam1 As Long, _
	                       ByVal dwParam2 As Long) As Long
	
	        Declare Function mixerOpen Lib "winmm.dll" _
	                       (phmx As Long, _
	                       ByVal uMxId As Long, _
	                       ByVal dwCallback As Long, _
	                       ByVal dwInstance As Long, _
	                       ByVal fdwOpen As Long) As Long
	
	        Declare Function mixerSetControlDetails Lib "winmm.dll" _
	                       (ByVal hmxobj As Long, _
	                       pmxcd As MIXERCONTROLDETAILS, _
	                       ByVal fdwDetails As Long) As Long
	
	        Declare Sub CopyStructFromPtr Lib "kernel32" _
	                       Alias "RtlMoveMemory" _
	                       (struct As Any, _
	                       ByVal ptr As Long, _
	                       ByVal cb As Long)
	
	        Declare Sub CopyPtrFromStruct Lib "kernel32" _
	                       Alias "RtlMoveMemory" _
	                       (ByVal ptr As Long, _
	                       struct As Any, _
	                       ByVal cb As Long)
	
	        Declare Function GlobalAlloc Lib "kernel32" _
	                       (ByVal wFlags As Long, _
	                       ByVal dwBytes As Long) As Long
	
	        Declare Function GlobalLock Lib "kernel32" _
	                       (ByVal hmem As Long) As Long
	
	        Declare Function GlobalFree Lib "kernel32" _
	                       (ByVal hmem As Long) As Long
	
	        Type MIXERCAPS
	           wMid As Integer                   '  manufacturer id
	           wPid As Integer                   '  product id
	           vDriverVersion As Long            '  version of the driver
	           szPname As String * MAXPNAMELEN   '  product name
	           fdwSupport As Long                '  misc. support bits
	           cDestinations As Long             '  count of destinations
	        End Type
	
	        Type MIXERCONTROL
	           cbStruct As Long           '  size in Byte of MIXERCONTROL
	           dwControlID As Long        '  unique control id for mixer device
	           dwControlType As Long      '  MIXERCONTROL_CONTROLTYPE_xxx
	           fdwControl As Long         '  MIXERCONTROL_CONTROLF_xxx
	           cMultipleItems As Long     '  if MIXERCONTROL_CONTROLF_MULTIPLE
	                                      '  set
	           szShortName As String * MIXER_SHORT_NAME_CHARS  ' short name of
	                                                           ' control
	           szName As String * MIXER_LONG_NAME_CHARS        ' long name of
	                                                           ' control
	           lMinimum As Long           '  Minimum value
	           lMaximum As Long           '  Maximum value
	           reserved(10) As Long       '  reserved structure space
	           End Type
	
	        Type MIXERCONTROLDETAILS
	           cbStruct As Long       '  size in Byte of MIXERCONTROLDETAILS
	           dwControlID As Long    '  control id to get/set details on
	           cChannels As Long      '  number of channels in paDetails array
	           item As Long           '  hwndOwner or cMultipleItems
	           cbDetails As Long      '  size of _one_ details_XX struct
	           paDetails As Long      '  pointer to array of details_XX structs
	        End Type
	
	        Type MIXERCONTROLDETAILS_UNSIGNED
	           dwValue As Long        '  value of the control
	        End Type
	
	        Type MIXERLINE
	           cbStruct As Long               '  size of MIXERLINE structure
	           dwDestination As Long          '  zero based destination index
	           dwSource As Long               '  zero based source index (if
	                                          '  source)
	           dwLineID As Long               '  unique line id for mixer device
	           fdwLine As Long                '  state/information about line
	           dwUser As Long                 '  driver specific information
	           dwComponentType As Long        '  component type line connects to
	           cChannels As Long              '  number of channels line supports
	           cConnections As Long           '  number of connections (possible)
	           cControls As Long              '  number of controls at this line
	           szShortName As String * MIXER_SHORT_NAME_CHARS
	           szName As String * MIXER_LONG_NAME_CHARS
	           dwType As Long
	           dwDeviceID As Long
	           wMid  As Integer
	           wPid As Integer
	           vDriverVersion As Long
	           szPname As String * MAXPNAMELEN
	        End Type
	
	        Type MIXERLINECONTROLS
	           cbStruct As Long       '  size in Byte of MIXERLINECONTROLS
	           dwLineID As Long       '  line id (from MIXERLINE.dwLineID)
	                                  '  MIXER_GETLINECONTROLSF_ONEBYID or
	           dwControl As Long      '  MIXER_GETLINECONTROLSF_ONEBYTYPE
	           cControls As Long      '  count of controls pmxctrl points to
	           cbmxctrl As Long       '  size in Byte of _one_ MIXERCONTROL
	           pamxctrl As Long       '  pointer to first MIXERCONTROL array
	        End Type
	
	        Function GetVolumeControl(ByVal hmixer As Long, _
	                                ByVal componentType As Long, _
	                                ByVal ctrlType As Long, _
	                                ByRef mxc As MIXERCONTROL) As Boolean
	
	        ' This function attempts to obtain a mixer control.
	        ' Returns True if successful.
	           Dim mxlc As MIXERLINECONTROLS
	           Dim mxl As MIXERLINE
	           Dim hmem As Long
	           Dim rc As Long
	
	           mxl.cbStruct = Len(mxl)
	           mxl.dwComponentType = componentType
	
	           ' Obtain a line corresponding to the component type
	           rc = mixerGetLineInfo(hmixer, _
	                                 mxl, _
	                                 MIXER_GETLINEINFOF_COMPONENTTYPE)
	
	           If (MMSYSERR_NOERROR = rc) Then
	               mxlc.cbStruct = Len(mxlc)
	               mxlc.dwLineID = mxl.dwLineID
	               mxlc.dwControl = ctrlType
	               mxlc.cControls = 1
	               mxlc.cbmxctrl = Len(mxc)
	
	               ' Allocate a buffer for the control
	               hmem = GlobalAlloc(&H40, Len(mxc))
	               mxlc.pamxctrl = GlobalLock(hmem)
	               mxc.cbStruct = Len(mxc)
	
	               ' Get the control
	               rc = mixerGetLineControls(hmixer, _
	                                         mxlc, _
	                                         MIXER_GETLINECONTROLSF_ONEBYTYPE)
	
	               If (MMSYSERR_NOERROR = rc) Then
	                   GetVolumeControl = True
	
	                   ' Copy the control into the destination structure
	                   CopyStructFromPtr mxc, mxlc.pamxctrl, Len(mxc)
	               Else
	                   GetVolumeControl = False
	               End If
	               GlobalFree (hmem)
	               Exit Function
	           End If
	
	           GetVolumeControl = False
	        End Function
	
	        Function SetVolumeControl(ByVal hmixer As Long, _
	                                mxc As MIXERCONTROL, _
	                                ByVal volume As Long) As Boolean
	        ' This function sets the value for a volume control.
	        ' Returns True if successful
	
	           Dim mxcd As MIXERCONTROLDETAILS
	           Dim vol As MIXERCONTROLDETAILS_UNSIGNED
	
	           mxcd.item = 0
	           mxcd.dwControlID = mxc.dwControlID
	           mxcd.cbStruct = Len(mxcd)
	           mxcd.cbDetails = Len(vol)
	
	           ' Allocate a buffer for the control value buffer
	           hmem = GlobalAlloc(&H40, Len(vol))
	           mxcd.paDetails = GlobalLock(hmem)
	           mxcd.cChannels = 1
	           vol.dwValue = volume
	
	           ' Copy the data into the control value buffer
	           CopyPtrFromStruct mxcd.paDetails, vol, Len(vol)
	
	           ' Set the control value
	           rc = mixerSetControlDetails(hmixer, _
	                                      mxcd, _
	                                      MIXER_SETCONTROLDETAILSF_VALUE)
	
	           GlobalFree (hmem)
	           If (MMSYSERR_NOERROR = rc) Then
	               SetVolumeControl = True
	           Else
	               SetVolumeControl = False
	           End If
	        End Function
	
	5. Copy the following code to the Code window of Form1:
	
	        Option Explicit
	
	        Dim hmixer As Long          ' mixer handle
	        Dim volCtrl As MIXERCONTROL ' waveout volume control
	        Dim micCtrl As MIXERCONTROL ' microphone volume control
	        Dim rc As Long              ' return code
	        Dim ok As Boolean           ' boolean return code
	
	        Private Sub Form_Load()
	        ' Open the mixer with deviceID 0.
	           rc = mixerOpen(hmixer, 0, 0, 0, 0)
	           If ((MMSYSERR_NOERROR <> rc)) Then
	               MsgBox "Couldn't open the mixer."
	               Exit Sub
	               End If
	
	           ' Get the waveout volume control
	           ok = GetVolumeControl(hmixer, _
	                                MIXERLINE_COMPONENTTYPE_DST_SPEAKERS, _
	                                MIXERCONTROL_CONTROLTYPE_VOLUME, _
	                                volCtrl)
	           If (ok = True) Then
	               ' If the function successfully gets the volume control,
	               ' the maximum and minimum values are specified by
	               ' lMaximum and lMinimum
	               Label1.Caption = volCtrl.lMinimum _
	                                & " to " _
	                                & volCtrl.lMaximum
	               End If
	
	           ' Get the microphone volume control
	           ok = GetVolumeControl(hmixer, _
	                                MIXERLINE_COMPONENTTYPE_SRC_MICROPHONE, _
	                                MIXERCONTROL_CONTROLTYPE_VOLUME, _
	                                micCtrl)
	           If (ok = True) Then
	               Label2.Caption = micCtrl.lMinimum _
	                                & " to " _
	                                & micCtrl.lMaximum
	               End If
	        End Sub
	
	        Private Sub Command1_Click()
	           vol = CLng(Text1.Text)
	           SetVolumeControl hmixer, volCtrl, vol
	        End Sub
	
	        Private Sub Command2_Click()
	           vol = CLng(Text2.Text)
	           SetVolumeControl hmixer, micCtrl, vol
	        End Sub
	
	6. On the Run menu, click Start or press the F5 key to start the program.
	  Minimize the Visual Basic IDE so all that appears on your display is Form1.
	  Maximize the Volume Level program in the Task bar. Arrange Form1 and the
	  Volume Level program so both programs are visible.
	
	7. Enter a value between the minimum and maximum values shown in one or both
	  text boxes and click one of the command buttons in Form1. Note that the
	  corresponding slider in the Volume Level program is adjusted to your
	  specified level.
	
	(c) Microsoft Corporation 1997, All Rights Reserved.
	Contributions by Arsenio Locsin, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbsample kbsound kbVBp500 kbVBp600 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
