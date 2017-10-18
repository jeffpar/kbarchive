---
layout: page
title: "Q322224: DOC: MSDN InstanceDescriptor Class Example Is Incorrect"
permalink: kb/322/Q322224/
---

## Q322224: DOC: MSDN InstanceDescriptor Class Example Is Incorrect

	Article: Q322224
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocerr
	Last Modified: 10-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Developer Network (MSDN) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The example in the System.ComponentModel.Design.Serialization.InstanceDescriptor
	class documentation is incorrect in the online Microsoft Developer Network
	(MSDN) documentation and in the January 2002 media for MSDN. The values that are
	passed into the constructor do not get assigned to the properties of the class.
	
	To see the System.ComponentModel.Design.Serialization.InstanceDescriptor class
	documentation, visit the following MSDN Web site:
	
	  InstanceDescriptor Class
	  http://msdn.microsoft.com/library/default.asp?url=/library/en-us/cpref/html/frlrfSystemComponentModelDesignSerializationInstanceDescriptorClassTopic.asp
	
	MORE INFORMATION
	================
	
	The constructor contains ambiguous naming conventions for the constructor
	arguments and the property procedure names. The property values are stored in
	private variables of the class but do not get initialized because of this
	ambiguity.
	
	To correctly implement the constructor, fully qualify the property procedures.
	When you fully qualify property procedures, any values that are passed into the
	property procedures are validated, and private variables are initialized.
	
	For example, use the following Microsoft Visual Basic code to correct this
	problem in the sample:
	
	     Public Sub New(ByVal point1 As Point, ByVal point2 As Point, ByVal point3 As Point)
	        Me.Point1 = point1
	        Me.Point2 = point2
	        Me.Point3 = point3
	     End Sub 'New
	
	Use the following Microsoft Visual C# code to correct this problem in the
	sample:
	
	     public Triangle(Point point1,Point point2,Point point3) {
	        this.Point1 = point1;
	        this.Point2 = point2;
	        this.Point3 = point3;
	     }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdocerr 
	Technology        : kbMSDNSearch kbZNotKeyword2
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
