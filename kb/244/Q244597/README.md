---
layout: page
title: "Q244597: HOWTO: Enumerate Cluster Resources by Resource Type in VB"
permalink: /kb/244/Q244597/
---

## Q244597: HOWTO: Enumerate Cluster Resources by Resource Type in VB

{% raw %}

	Article: Q244597
	Product(s): Microsoft Windows NT
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbClustServSearch kbDSupport
	Last Modified: 02-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Cluster Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The sample code provided in this article demonstrates how to enumerate all of
	the resources of a specific resource type on a cluster. This is accomplished
	through the use of Microsoft Cluster Automation Server (CAS), which is a set of
	COM objects that acts as an interface to Microsoft Cluster Server.
	
	MORE INFORMATION
	================
	
	To run the sample code, CAS must be installed. For additional information about
	the availability of CAS, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q245656 INFO: Where to Obtain Cluster Automation Server
	
	To run the code, the client must have access permissions granted on the cluster.
	Access permissions are set through the Cluster Administrator.
	
	From Visual Basic:
	
	1. Start a new Standard EXE project.
	
	2. Reference the CAS components in the project:
	
	  a. From the Project menu, select References.
	
	  b. Click to select the Microsoft Cluster Service Automation Classes check
	     box.
	
	  c. Click OK.
	
	3. Add a text box (Text1) and a command button (Command1) to the default form.
	
	4. Double-click the Command1 button. This action will take you to the code for
	  the form.
	
	5. Add the following code to the Command1_Click click event:
	
	  Private Sub Command1_Click()
	      Dim objCluster As New Cluster
	      Dim colResTypes As ClusResTypes
	      Dim colResType As ClusResType
	      Dim colResTypeResources As ClusResTypeResources
	      Dim clusResource As clusResource
	      Dim colClusProperties As ClusProperties
	            
	      On Error GoTo Handle_Error
	      'Change this to point to your cluster.
	      objCluster.Open ("")
	      
	      Set colResTypes = objCluster.ResourceTypes
	          
	      'Get the resource type collection object
	      Set colResType = colResTypes.Item(Text1.Text)
	      
	      Set colResTypeResources = colResType.Resources
	
	      'Enumerate all of the resources in the collection.
	      'Display a msgbox for each.
	      For Each clusResource In colResTypeResources
	          Set colClusProperties = clusResource.CommonProperties
	          MsgBox Text1.Text & " resource name: " & clusResource.Name
	      Next
	      
	      Exit Sub
	
	  Handle_Error:
	      MsgBox Text1.Text & ": resource type not found"
	
	  End Sub
	
	6. Change the following line of code to open the cluster you want to access:
	
	  objCluster.Open("")
	
	  For example, if your cluster is named "mycluster," change the code to the
	  following:
	
	  objCluster.Open("mycluster")
	
	  Passing an empty string causes the code to attempt to open a connection to a
	  cluster on the local machine.
	
	7. Press F5 or click Run to run the program.
	
	8. In the text box, enter the name of the resource type you want to enumerate
	  the resources of. Note that this entry is case-sensitive.
	
	9. Click the Command1 button. Notice that a message box is displayed for each
	  resource that is of the type that you specified in the text box.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q244584 HOWTO: Enumerate Cluster Resources by Resource Type in Visual C++
	
	  Q245656 INFO: Where to Obtain Cluster Automation Server
	
	Additional query words:
	
	======================================================================
	Keywords          : kbClustServSearch kbDSupport 
	Technology        : kbAudDeveloper kbClustServSearch
	Version           : winnt:
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
