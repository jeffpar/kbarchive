---
layout: page
title: "Q305471: HOWTO: Use IMPLEMENTS with Microsoft Agent and Visual FoxPro"
permalink: /kb/305/Q305471/
---

## Q305471: HOWTO: Use IMPLEMENTS with Microsoft Agent and Visual FoxPro

	Article: Q305471
	Product(s): Microsoft FoxPro
	Version(s): 7.0
	Operating System(s): 
	Keyword(s): kbAutomation kbvfp kbGrpDSFox kbDSupport kbvfp700
	Last Modified: 05-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Visual FoxPro (VFP) 7.0 introduces the IMPLEMENTS and EVENTHANDLER
	keywords. These additions to the language allow you to handle events that are
	raised in a Component Object Model (COM) object's interface. This article
	demonstrates some of the events that the Microsoft Agent version 2.0 control can
	raise, and how VFP can work with them.
	
	MORE INFORMATION
	================
	
	Agent is preinstalled on Microsoft Windows 2000, Microsoft Windows Me, and
	Microsoft Windows XP. To download Agent for other platforms, and to obtain
	additional characters (such as the Genie that is referenced in the code below),
	see the following Microsoft Web site:
	
	  http://www.microsoft.com/products/msagent/
	  (http://www.microsoft.com/products/msagent/)
	
	The new Object Browser in VFP 7.0 allows you to view the properties, events, and
	methods of COM objects, as well as constants and enumerations, classes, and
	interfaces. IMPLEMENTS works with the interfaces that the Object Browser
	displays.
	
	The following steps create a class that you can use with EVENTHANDLER. At the end
	is the end result of these steps, plus modifications in the Show, Hide,
	RequestStart, RequestComplete, IdleStart, IdleComplete, Move, BalloonShow, and
	BalloonHide methods. You will need to paste this code in your class.
	
	1. On the Tools menu, click Object Browser.
	
	2. Click the Open Type Library button in the upper left corner of the user
	  interface.
	
	3. If this is the first time you are running the Object Browser, wait for the
	  list of COM libraries to be built.
	
	4. Select Microsoft Agent Control 2.0 and click OK.
	
	5. Expand AgentObjects, then expand Interfaces.
	
	6. In the command window, type "MODIFY COMMAND impAgent" (without the quotation
	  marks).
	
	7. In the Object Browser, drag _AgentEvents to the impAgent window.
	
	8. Review the following code, and make the specified changes to the methods in
	  the class definition that you just created.
	
	  DEFINE CLASS myClass AS SESSION OLEPUBLIC
	
	     IMPLEMENTS _AgentEvents IN "c:\winnt\msagent\agentctl.dll"
	
	     PROCEDURE _AgentEvents_ActivateInput(CharacterID AS STRING) AS VOID
	        * Add user code here.
	     ENDPROC
	
	     PROCEDURE _AgentEvents_DeactivateInput(CharacterID AS STRING) AS VOID
	        * Add user code here.
	     ENDPROC
	
	     PROCEDURE _AgentEvents_Click(CharacterID AS STRING, Button AS INTEGER, ;
	        Shift AS INTEGER, x AS INTEGER, y AS INTEGER) AS VOID
	        * Add user code here.
	     ENDPROC
	
	     PROCEDURE _AgentEvents_DblClick(CharacterID AS STRING, Button AS INTEGER, ;
	        Shift AS INTEGER, x AS INTEGER, y AS INTEGER) AS VOID
	        * Add user code here.
	     ENDPROC
	
	     PROCEDURE _AgentEvents_DragStart(CharacterID AS STRING, Button AS INTEGER, ;
	        Shift AS INTEGER, x AS INTEGER, y AS INTEGER) AS VOID
	        * Add user code here.
	     ENDPROC
	
	     PROCEDURE _AgentEvents_DragComplete(CharacterID AS STRING, ;
	        Button AS INTEGER, Shift AS INTEGER, x AS INTEGER, y AS INTEGER) AS VOID
	        * Add user code here.
	     ENDPROC
	
	     PROCEDURE _AgentEvents_Show(CharacterID AS STRING, Cause AS INTEGER) AS VOID
	        ACTIVATE SCREEN
	        ? "Showing " + ALLTRIM(CharacterID)
	        IF Cause = 2   && User clicked on taskbar icon
	           ?? " because you said so."
	        ENDIF
	     ENDPROC
	
	     PROCEDURE _AgentEvents_Hide(CharacterID AS STRING, Cause AS INTEGER) AS VOID
	        ACTIVATE SCREEN
	        ? "Hiding " + ALLTRIM(CharacterID)
	        IF Cause = 1 OR Cause = 7   && User clicked on taskbar icon or character
	           ?? " because you said so."
	        ENDIF
	     ENDPROC
	
	     PROCEDURE _AgentEvents_RequestStart(Request AS VARIANT) AS VOID
	        ACTIVATE SCREEN
	        ? "Agent is starting request."
	     ENDPROC
	
	     PROCEDURE _AgentEvents_RequestComplete(Request AS VARIANT) AS VOID
	        ACTIVATE SCREEN
	        ? "Agent has finished request."
	     ENDPROC
	
	     PROCEDURE _AgentEvents_Restart() AS VOID
	        * Add user code here.
	     ENDPROC
	
	     PROCEDURE _AgentEvents_Shutdown() AS VOID
	        * Add user code here.
	     ENDPROC
	
	     PROCEDURE _AgentEvents_Bookmark(BookmarkID AS NUMBER) AS VOID
	        * Add user code here.
	     ENDPROC
	
	     PROCEDURE _AgentEvents_Command(UserInput AS VARIANT) AS VOID
	        * Add user code here.
	     ENDPROC
	
	     PROCEDURE _AgentEvents_IdleStart(CharacterID AS STRING) AS VOID
	        WAIT WINDOW "Hey, I'm getting bored here!" NOWAIT
	     ENDPROC
	
	     PROCEDURE _AgentEvents_IdleComplete(CharacterID AS STRING) AS VOID
	        WAIT WINDOW "Ah, that's better...." NOWAIT
	     ENDPROC
	
	     PROCEDURE _AgentEvents_Move(CharacterID AS STRING, x AS INTEGER, ;
	        y AS INTEGER, Cause AS INTEGER) AS VOID
	        IF Cause = 1   && User moved
	           WAIT WINDOW "Hey, I liked it where I was!" NOWAIT
	        ENDIF
	        IF Cause = 2   && Application moved
	           WAIT WINDOW "Yes, boss." NOWAIT
	        ENDIF
	     ENDPROC
	
	     PROCEDURE _AgentEvents_Size(CharacterID AS STRING, Width AS INTEGER, ;
	        Height AS INTEGER) AS VOID
	        * Add user code here.
	     ENDPROC
	
	     PROCEDURE _AgentEvents_BalloonShow(CharacterID AS STRING) AS VOID
	        ACTIVATE SCREEN
	        ? ALLTRIM(CharacterID) + " is talking"
	     ENDPROC
	
	     PROCEDURE _AgentEvents_BalloonHide(CharacterID AS STRING) AS VOID
	        ACTIVATE SCREEN
	        ? ALLTRIM(CharacterID) + " is not talking anymore"
	     ENDPROC
	
	     PROCEDURE _AgentEvents_HelpComplete(CharacterID AS STRING, Name AS STRING, ;
	        Cause AS INTEGER) AS VOID
	        * Add user code here.
	     ENDPROC
	
	     PROCEDURE _AgentEvents_ListenStart(CharacterID AS STRING) AS VOID
	        * Add user code here.
	     ENDPROC
	
	     PROCEDURE _AgentEvents_ListenComplete(CharacterID AS STRING, ;
	        Cause AS INTEGER) AS VOID
	        * Add user code here.
	     ENDPROC
	
	     PROCEDURE _AgentEvents_DefaultCharacterChange(GUID AS STRING) AS VOID
	        * Add user code here.
	     ENDPROC
	
	     PROCEDURE _AgentEvents_AgentPropertyChange() AS VOID
	        * Add user code here.
	     ENDPROC
	
	     PROCEDURE _AgentEvents_ActiveClientChange(CharacterID AS STRING, ;
	        Active AS LOGICAL) AS VOID
	        * Add user code here.
	     ENDPROC
	
	  ENDDEFINE
	
	9. Create a form to fire the events.
	
	NOTE: Make sure that the Genie character has been installed on your computer
	before you attempt to run this form.
	
	  PUBLIC oFrmAgent
	
	  oFrmAgent = NEWOBJECT("frmAgent")
	  oFrmAgent.Show()
	  RETURN
	
	  DEFINE CLASS frmAgent AS FORM
	
	     Height = 134
	     Width = 276
	     AutoCenter = .T.
	     Caption = "Agent Control Form"
	     Name = "frmAgent"
	     oEvents1 = .NULL.
	     oRequest1 = .NULL.
	     oRequest2 = .NULL.
	
	     ADD OBJECT cmdSpeak AS commandbutton WITH ;
	        Top = 24, ;
	        Left = 96, ;
	        Height = 27, ;
	        Width = 84, ;
	        Caption = "Speak", ;
	        Name = "cmdSpeak"
	
	     ADD OBJECT cmdMove AS commandbutton WITH ;
	        Top = 72, ;
	        Left = 96, ;
	        Height = 27, ;
	        Width = 84, ;
	        Caption = "Move", ;
	        Name = "cmdMove"
	
	     PROCEDURE INIT
	        CLEAR
	
	        WITH ThisForm
	           *!* Add the Agent control to the form.
	           .AddObject("oleAgent1", "OleControl", "Agent.Control")
	
	           *!* Create the implementing class, and assign it to a form variable.
	           .oEvents1 = NEWOBJECT("myClass", "impAgent.prg")
	
	           *!* Associate the Agent control with the implementing class.
	           EVENTHANDLER(.oleAgent1.Object, .oEvents1)
	
	           *!* Load and display the characters.
	           WITH .oleAgent1.Object
	              .Characters.Load("Merlin", "Merlin.acs")
	              .Characters("Merlin").MoveTo(10, 10)
	
	              .Characters.Load("Genie", "Genie.acs")
	              .Characters("Genie").MoveTo(100, 100)
	
	              .Characters("Merlin").Show()
	              .Characters("Genie").Show()
	           ENDWITH
	        ENDWITH
	     ENDPROC
	
	     PROCEDURE QueryUnload
	        WITH ThisForm.oleAgent1.Object
	           ThisForm.oRequest1 = .Characters("Merlin").Hide()
	           ThisForm.oRequest2 = .Characters("Genie").Hide()
	           DO WHILE ThisForm.oRequest1.Status != 0 AND ;
	                 ThisForm.oRequest2.Status != 0
	              DOEVENTS
	           ENDDO
	
	           *!* The following line is required to keep the variables in
	           *!* scope until the event handler finishes. After this method
	           *!* completes, the form closes, and the oRequest variables
	           *!* disappear.
	           WAIT WINDOW "" TIMEOUT 1  
	
	           .Characters.Unload("Merlin")
	           .Characters.Unload("Genie")
	        ENDWITH
	     ENDPROC
	
	     PROCEDURE cmdSpeak.Click
	        *!* The request object must remain in scope for the Agent events
	        *!* to fire.
	        WITH ThisForm
	           .oRequest1 = .oleAgent1.Characters("Merlin").Speak("To be, " + ;
	              "or not to be: that is the question.")
	        ENDwith
	     ENDPROC
	
	     PROCEDURE cmdMove.Click
	        ThisForm.oleAgent1.Characters("Merlin").MoveTo(300, 300)
	     ENDPROC
	  ENDDEFINE
	
	After you run this form, try working with the agents by clicking both the agents
	and the form buttons. You can also try getting an object reference from the
	command line (oFrmAgent.oleAgent.Object) and controlling the characters
	directly, and putting code in impAgent to handle the other events that occur.
	
	REFERENCES
	==========
	
	For additional information on Visual FoxPro and Agent, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q191950 HOWTO: Control Microsoft Agent with Visual FoxPro
	
	For more information about Agent, see the following Web site:
	
	  http://www.msagentring.org/
	
	For more information, see the following article:
	
	  Neklioudov, Nick. "Talk to Me!" FoxPro Advisor, August 2001.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAutomation kbvfp kbGrpDSFox kbDSupport kbvfp700 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP700
	Version           : :7.0
	Issue type        : kbhowto
	
	=============================================================================
	
