---
layout: page
title: "Q298854: Combat Flight Simulator 2: (French) Err Msg in Mission 8"
permalink: kb/298/Q298854/
---

## Q298854: Combat Flight Simulator 2: (French) Err Msg in Mission 8

	Article: Q298854
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Combat Flight Simulator 2: WWII Pacific Theater, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When trying to complete Mission 8, "Mission patrouille aerienne dans les SALOM",
	you may receive the following error message:
	
	
	  Une erreur est apparue durant l'analyse du fichier script des elements
	  dynamiques de cette mission. L'analyseur a decele un probleme a la ligne 118
	  a proximite de la marque fuite.
	
	
	CAUSE
	=====
	
	This behavior can be caused by an error in the dynamic mission element file for
	this mission. There are too many double quotation marks ("") around one of the
	mission messages.
	
	RESOLUTION
	==========
	
	To resolve this issue, edit the dynamic mission element file. To do so, follow
	these steps:
	
	1. Click Start, point to Find, and then click "Files or Folders".
	
	2. In the Named box, type "ff1fm6_usn.dyn" (without the quotation marks).
	
	3. In the Look In box, ensure that the drive in which Combat Flight Simulator II
	  was installed is shown.
	
	4. Click Find Now.
	
	5. Press and hold the SHIFT key, right-click the file name, and then click Open
	  With.
	
	6. Select Notepad to open this file, and then click OK.
	
	7. In Notepad, click Search, and then click Find.
	
	8. In the Find What box, type "fuite" (without the quotation marks), and then
	  click Find Next.
	
	9. Remove the double quotation marks on either side of the following sentence,
	  leaving only one set of quotation marks. For example, change this ""Fuite de
	  carburant, deroutemenet vers la base""
	
	  to this:
	
	  "Fuite de carburant, deroutemenet vers la base"
	
	
	10. On the File menu, click Save.
	
	11. On the File menu, click Exit.
	
	MORE INFORMATION
	================
	
	The dynamic mission element messages are translated from English to French for
	this product. During the process, double quotation marks were added in error to
	this message for mission 8.
	
	This only occurs in the French language version of Combat Flight Simulator 2.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch _IKkbbogus kbGamesSearch kbCombatFlightSim2 kbCombatFlightSimSearch
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	
